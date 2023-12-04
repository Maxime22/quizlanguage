let database;

const badgeStoreName = "newBadges"
const indexedDBVersion = 2;

window.onload = function () {
    const firstPromise = setupDB();
}

export function setupDB(){
    return new Promise((resolve, reject) => {
        let request = indexedDB.open("QuizBDD", indexedDBVersion);
        // FOR DEV PURPOSE
        // indexedDB.deleteDatabase("QuizBDD")

        request.onupgradeneeded = function (event) {
            let transaction = event.target.transaction;
            let database = event.target.result;
            let oldDatabaseVersion = event.oldVersion;

            if (oldDatabaseVersion < 1) {
                if (!database.objectStoreNames.contains("badges")) {
                    let badgeStore = database.createObjectStore("badges", {keyPath: "badgeName"});
                    badgeStore.createIndex("badgeName", "badgeName", {unique: true});
                }
            }
            if (oldDatabaseVersion < 2) {
                if (!database.objectStoreNames.contains("lessons")) {
                    let lessonStore = database.createObjectStore("lessons", {keyPath: "lessonId"});
                    lessonStore.createIndex("lessonNumber", "lessonNumber", {unique: true});
                    lessonStore.createIndex("score", "score");
                }
                if (database.objectStoreNames.contains("badges")) {
                    if (!database.objectStoreNames.contains("newBadges")) {
                        let newBadgeStore = database.createObjectStore("newBadges", {keyPath: "badgeId"});
                        newBadgeStore.createIndex("badgeName", "badgeName", {unique: true});

                        let oldBadgeStore = event.target.transaction.objectStore("badges");
                        oldBadgeStore.openCursor().onsuccess = function (event) {
                            let cursor = event.target.result;
                            if (cursor) {
                                let data = cursor.value;
                                let originalBadgeName = data.badgeName;
                                let modifiedBadgeName = originalBadgeName.replace(/ /g, "_");
                                data.badgeId = modifiedBadgeName + "_" + Date.now();
                                data.badgeName = modifiedBadgeName;
                                newBadgeStore.add(data);
                                cursor.continue();
                            } else {
                                database.deleteObjectStore("badges");
                            }
                        };
                    }
                }
            }

            transaction.onerror = function (event) {
                console.error("Erreur de transaction:", event.target.error);
            };
        };

        request.onsuccess = function (event) {
            database = event.target.result;
            console.log("Version actuelle de la base de données:", database.version);

            displayStatistics();
            resolve(database);
        };

        request.onerror = function (event) {
            console.log("Erreur d'ouverture de la base de données", event);
            console.error("Erreur IndexedDB:", event.target.error);
            reject();
        };
    });
}

export function displayStatistics() {
    let transaction = database.transaction(["lessons"], "readonly");
    let lessonStore = transaction.objectStore("lessons");
    let getAllLessons = lessonStore.getAll();

    getAllLessons.onsuccess = function (e) {
        let lessons = e.target.result;
        let lessonsMap = new Map();

        lessons.forEach(lesson => {
            lessonsMap.set(lesson.lessonNumber, lesson.score);
        });

        displayBadgesWithScores(lessonsMap);
    };

    getAllLessons.onerror = function () {
        console.error("Erreur lors de la récupération des leçons");
    };

}

function displayBadgesWithScores(lessonsMap) {
    let transaction = database.transaction([badgeStoreName], "readonly");
    let badgeStore = transaction.objectStore(badgeStoreName);
    let getAllBadges = badgeStore.getAll();

    getAllBadges.onsuccess = function (e) {
        let badges = e.target.result;

        // Tri des badges par numéro de leçon
        badges.sort((a, b) => {
            let numberA = parseInt(a.badgeName.match(/\d+/)[0]);
            let numberB = parseInt(b.badgeName.match(/\d+/)[0]);
            return numberA - numberB;
        });

        let badgeListElement = document.getElementById('badgeListItems');
        badgeListElement.innerHTML = '';

        badges.forEach(badge => {
            createBadgeWithScoreForDisplay(badge, badgeListElement, lessonsMap)
        });
    };

    getAllBadges.onerror = function () {
        console.error("Erreur lors de la récupération des badges");
    };
}

function createBadgeWithScoreForDisplay(badge, badgeListElement, lessonsMap) {
    let listItem = document.createElement('li');
    listItem.className = 'badgeItem'; // Ajouter une classe pour le styliser en CSS

    // Structure du badge
    let badgeContainer = document.createElement('div');
    badgeContainer.className = 'badgeContainer';

    let badgeName = document.createElement('span');
    badgeName.className = 'badgeName';
    badgeName.textContent = badge.badgeName;

    let badgeCount = document.createElement('span');
    badgeCount.className = 'badgeCount';
    badgeCount.textContent = `x${badge.numberOfThisBadge}`;

    let lessonScore = lessonsMap.get(parseInt(badge.badgeName.match(/\d+/)[0]));
    if (!lessonScore){
        lessonScore = "??";
    }
    let starElement = createStarElement(lessonScore);

    let lessonScoreDisplayed = document.createElement('span');
    lessonScoreDisplayed.className = "lessonScoreDisplayed";
    lessonScoreDisplayed.textContent = " (" + lessonScore + "%)";

    badgeContainer.appendChild(badgeName);
    badgeContainer.appendChild(badgeCount);
    badgeContainer.appendChild(starElement);
    badgeContainer.appendChild(lessonScoreDisplayed)

    listItem.appendChild(badgeContainer);
    badgeListElement.appendChild(listItem);
}

function createStarElement(score) {
    let starContainer = document.createElement('div');
    starContainer.className = 'lessonScoreStarContainer';

    let starCount = calculateStars(score);


    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('span');
        star.className = 'lessonScoreStar';
        star.textContent = '⭐';
        starContainer.appendChild(star);
    }

    return starContainer;
}

function calculateStars(score) {
    if (score === 100) return 5;
    if (score >= 75) return 4;
    if (score >= 50) return 3;
    if (score >= 25) return 2;
    return 1;
}

export function registerLessonScore(lessonScore, lessonNumber) {
    return new Promise((resolve, reject) => {
        let transaction = database.transaction(["lessons"], "readwrite");
        let lessonStore = transaction.objectStore("lessons");
        let lessonIndex = lessonStore.index('lessonNumber');
        let getLesson = lessonIndex.get(lessonNumber);

        getLesson.onsuccess = function (e) {
            let data = e.target.result;

            if (data) {
                if (!data.score || data.score < lessonScore) {
                    data.score = lessonScore;
                }
                updateLessonStore(lessonStore, data).then(() => {
                    resolve("Updated successfully");
                }).catch((error) => {
                    reject("Error in updating lesson : " + error);
                });
            } else {
                addNewLesson(lessonStore, lessonNumber, lessonScore).then(() => {
                    resolve("Added successfully");
                }).catch((error) => {
                    reject("Error in adding lesson : " + error);
                });
            }
        };

        getLesson.onerror = function (e) {
            reject("Error in getting lesson: " + e.target.errorCode);
        };
    });
}

function updateLessonStore(lessonStore, data) {
    return new Promise((resolve, reject) => {
        // Suppose lessonStore.put returns a request object
        let request = lessonStore.put(data);

        request.onsuccess = function () {
            resolve();
        };

        request.onerror = function (e) {
            reject(e.target.errorCode);
        };
    });
}

function addNewLesson(lessonStore, lessonNumber, lessonScore) {
    return new Promise((resolve, reject) => {
        // Suppose lessonStore.add returns a request object
        let request = lessonStore.add({
            lessonId: "Lesson_" + lessonNumber + "_" + Date.now(),
            lessonNumber: lessonNumber,
            score: lessonScore
        });

        request.onsuccess = function () {
            resolve();
        };

        request.onerror = function (e) {
            reject(e.target.errorCode);
        };
    });
}

export function registerBadge(badgeName) {
    let transaction = database.transaction([badgeStoreName], "readwrite");
    let badgeStore = transaction.objectStore(badgeStoreName);
    let badgeIndex = badgeStore.index('badgeName');
    let getBadge = badgeIndex.get(badgeName);

    getBadge.onsuccess = function (e) {
        let data = e.target.result;

        if (data) {
            data.numberOfThisBadge++;
            badgeStore.put(data);
        } else {
            badgeStore.add({badgeId: badgeName + "_" + Date.now(), badgeName: badgeName, numberOfThisBadge: 1});
        }
    };

    getBadge.onerror = function () {
        console.error("Erreur lors de l'enregistrement du badge");
    };
}