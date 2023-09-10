const keyValuePairs = {
    "vite": "hayaku",
    "allons(-y)": "ikimashô",
    "j'ai compris": "wakarimashita",
    "où": "doko",
    "[destination]": "e",
    "là-bas": "asoko",
    "être chaud": "atsui",
    "être": "desu",
    "[accord]": "ne",
    "ah oui / ainsi": "sô",
    "un": "ichi",
    "deux": "ni",
    "leçon": "ka",
    "[question]": "ka",
    "-ième": "dai",
    "picasso": "pikaso",
    "exposition": "ten",
    "avoir-regardé": "mimashita",
    "regarder": "miru",
    "quoi": "nani",
    "[objet]": "o",
    "pas encore": "mada",
    "être bien": "ii",
    "[engagement]": "yo",
    "demain": "ashita",
    "je vais": "ikimasu",
    "aller": "iku",
    "(négation)": "-masen",
    "bonjour (matin)": "ohayô gozaimasu",
    "pain": "pan",
    "je mange": "tabemasu",
    "manger": "taberu",
    "café": "kôhi",
    "je bois": "nomimasu",
    "boire": "nomu",
    "bière": "bîru",
    "petit-déjeuner": "chôsoku",
    "trois": "san",
    "quatre": "yon",
    "cinq": "go",
    "six": "roku",
    "sept": "shichi",
    "sept (2ème version)": "nana",
    "pomme": "ringo",
    "alors": "soredewa / dewa",
    "oeuf": "tamago",
    "douane": "zeikan",
    "appareil photo": "kamera",
    "je possède": "motte imasu",
    "posséder": "motsu",
    "oui": "hai",
    "[lieu]": "ni",
    "il se trouve / il y a": "arimasu",
    "trouver (se)": "aru",
    "valise": "toranku",
    "[relation]": "no",
    "intérieur": "naka",
    "[sujet]": "ga",
    "vêtement": "fuku",
    "et": "to",
    "livre": "hon",
    "cela": "sore",
    "seulement": "dake",
    "[familiarité] alcool / de l'alcool ?": "o sake",
    "alcool": "sake",
    "parfait": "kekkô",
    "huit": "hachi",
    "neuf (chiffre)": "kyû",
    "dix": "jû",
    "onze": "jû ichi",
    "les courses": "kaimono",
    "grand magasin": "depâto",
    "ensemble": "issho",
    "[adverbial]": "ni",
    "j'achète": "kaimasu",
    "acheter": "kau",
    "chaussettes": "kutsushita",
    "être arrivé": "tsukimashita",
    "entrons": "hairimashô",
    "ici": "koko",
    "mais": "demo",
    "cher": "takai",
    "j'abandonne": "yamemasu",
    "abandonner": "yameru",
    "sky": "sukai",
    "tree": "tsurî",
    "tôkyô": "tôkyô",
    "je connais": "shitte imasu",
    "[à-partir-de]": "kara",
    "comment": "dô",
    "d'abord": "mazu",
    "gare": "eki",
    "[jusqu'à]": "made",
    "bus": "basu",
    "[moyen]": "de",
    "être-proche": "chikai",
    "là": "soko",
    "train": "densha",
    "ensuite": "sorekara",
    "je marche": "arukimasu",
    "aquarium": "suizokukan",
    "intéressant": "omoshiroi",
    "cadeau": "omiyage",
    "magasin": "mise",
    "aussi": "mo",
    "beaucoup": "takusan",
    "(affirmation)": "-masu",
    "révision": "matome",
    "(passé)": "-mashita",
    "(invitation à soi ou à plusieurs)": "-mashô",
    "je ne sais pas": "wakarimasen",
    "cinéma": "eiga",
    "hier": "kinô",
    "avoir fait": "shimashita",
    "ami": "tomodachi",
    "être venu": "kimashita",
    "être allé": "ikimashita",
    "quoi": "nan (no)",
    "Amérique": "amerika",
    "Chaplin": "chappurin",
    "moderne": "modan",
    "temps": "taimuzu",
    "était-intéressant": "omoshiro katta",
    "lunettes": "megane",
    "avoir-oublié": "wasuremashita",
    "bien": "yoku",
    "ne pas avoir été visible": "miemasen deshita",
    "Chine": "chûka",
    "cuisine": "ryôri",
    "restaurant": "ryôri",
    "ce soir": "konban",
    "ah !": "aa",
    "très-aimé": "daisuki",
    "moi (homme)": "watakushi",
    "aussi": "mo",
    "potage": "sûpu",
    "viande": "niku",
    "poisson": "sakana",
    "prenons": "torimashô",
    "[familiarité]": "o",
    "baguettes": "hashi",
    "non": "ii e",
    "fourchette": "fôku",
    "s'il te plaît": "onegai shimasu",
    "donnez-moi": "kudasai",
    "je-vous-prie / voici": "dôzo",
    "merci": "arigatô",
    "être bon": "oishii",
    "très": "totemo",
    "de-nouveau": "mata",
    "japon": "nihon",
    "télévision": "terebi",
    "sumô": "sumô",
    "saison": "shîzun",
    "souvent": "yoku",
    "quelquefois": "tokidoki",
    "news (infos)": "nyûsu",
    "série télé (drama)": "dorama",
    "lequel-des-deux": "dochira",
    "aimé": "suki",
    "les-deux": "dochiramo",
    "matin": "asa",
    "à quelle heure": "nan ji ni",
    "je me lève": "okimasu",
    "heure": "ji",
    "être-tard": "osoi",
    "nuit / soir": "yoru",
    "je dors / je me couche": "nemasu",
    "aujourd'hui": "kyô",
    "[renforcement]": "wa",
    "[temps]": "ni",
    "pleine-nuit": "yonaka",
    "tout de même": "soredemo",
    "après-midi": "gogo",
    "bar": "bâ",
    "je suis en train de travailler": "hataraite imasu",
    "dans-ce-cas": "sorenara",
    "terrible": "taihen",
    "au café": "kissaten",
    "bonjour (midi)": "konnichi wa",
    "bonjour/entrez (serveur)": "irasshaimase",
    "Mme/Mr": "san",
    "[annonce]": "wa",
    "[but]": "ni",
    "se décider pour": "ni shimasu",
    "moi (femme)": "watashi",
    "bien": "jaa",
    "gâteau": "kashi",
    "vrai": "hontô",
    "maintenant": "ima",
    "régime": "daietto",
    "quand": "itsu",
    "rendez-vous": "yakusoku",
    "ce-matin": "kesa",
    "français": "furansu",
    "être-humain": "jin",
    "devant / avant": "mae",
    "heure": "jikan",
    "avoir-attendu": "machimashita",
    "extrêmement": "zuibun",
    "être-fait": "shita",
    "on-peut-penser-que": "deshô",
    "être-ennuyé": "komarimashita",
    "c'est impossible": "dekimasen",
    "téléphone": "denwa",
    "faire": "shimasu",
    "[attribution]": "ni",
    "savoir faire": "dekimasu",
    "présentation": "shôkai",
    "je m'appelle": "môchimasu",
    "j'habite": "sunde imasu",
    "an": "nen",
    "mariage": "kekkon",
    "enfant": "kodomo",
    "deux-personnes": "futari",
    "il existe": "imasu",
    "fille": "onnanoko",
    "garçon": "otokonoko",
    "votre-fille (<20 ans)": "ojôsan",
    "combien (how many)": "ikutsu",
    "an (âge)": "sai",
    "hein ?": "e ?",
    "réalité": "jitsu",
    "remariage": "saikon",
    "votre-garçon (<15 ans)": "obotchan",
    "dimanche": "nichiyôbi",
    "temps": "tenki",
    "pique-nique": "pikuniku",
    "invitons": "sasoimashô",
    "idée": "kangae",
    "comment (respectueux)": "ikaga",
    "j'emporte": "motte ikimasu",
    "tenir": "motte",
    "sandwich": "sandouitchi",
    "sushi": "sushi",
    "mandarine": "mikan",
    "à l'intention de": "tame ni",
    "jus de fruit": "jû su",
    "[addition]": "ni",
    "tout de suite": "sugu",
    "faisons-fonctionner": "kakemashô",
    "puce": "nomi",
    "marché": "ichi",
    "ce/cet/cette": "sono",
    "boîte": "hako",
    "droite": "migi",
    "tasse": "chawan",
    "combien (how much)": "ikura",
    "celle-ci ?": "kore desu ka ?",
    "gauche": "hidari",
    "10 000": "man",
    "yen": "en",
    "pardon": "gomen nasai",
    "1 000": "zen",
    "un peu": "chotto",
    "ancien": "furui",
    "objet": "mono",
    "Edo": "edo",
    "époque": "jidai",
    "ceci": "kore",
    "merci beaucoup": "dômo arigato gozaimasu",
    "derrière": "ura",
    "être-écrit": "kaite aru / katie arimasu",
    "je me suis fait avoir / avoir été fait": "yarareta / yararemashita"
}
