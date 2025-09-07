/**
 * Name Classifier
 * This script classifies names based on cultural/ethnic associations according to predefined lists.
 */

// List of names considered to be "black" according to user's criteria
// Note: This is based on the user's input and not meant to be stereotypical or offensive
let blackNames = [
  // Male black names (50 names)
  "deshawn", // African American origin
  "marquis", // French origin, popular in African American communities
  "darnell", // English origin, popular in African American communities
  "terrell", // English origin, popular in African American communities
  "malik",   // Arabic origin, meaning "king", popular in African American communities
  "tyrone",  // Irish origin, popular in African American communities
  "jamal",   // Arabic name meaning "handsome" or "beauty"
  "maurice", // Latin origin, popular in African American communities
  "jalen",   // African American origin, variant of Jaylen
  "darius",  // Persian origin, popular in African American communities
  "ahmed",   // Arabic origin, common in Africa and among Black Muslims
  "kwame",   // Ghanaian origin, meaning "born on Saturday"
  "omar",    // Arabic origin, meaning "flourishing", common in East Africa
  "rashad",  // Arabic origin, meaning "good judgment", common in African American communities
  "hakeem",  // Arabic origin, meaning "wise", popular in West Africa
  "jabari",  // Swahili origin, meaning "brave"
  "kofi",    // Ghanaian origin, meaning "born on Friday"
  "aiden",   // Irish origin, meaning "little fire"
  "deandre", // African American origin, combination of De and Andre
  "lamar",   // French origin, meaning "of the sea", popular in African American communities
  "trevon",  // African American origin, variant of Trevor
  "andre",   // French origin, meaning "manly", popular in African American communities
  "darryl",  // English origin, popular in African American communities
  "isaiah",  // Hebrew origin, meaning "salvation of the Lord", popular in African American communities
  "jaheim",  // African American origin
  "jermaine", // French origin, popular in African American communities
  "kareem",  // Arabic origin, meaning "generous", popular in African American communities
  "lebron",  // African American origin
  "marques", // Variant of Marquis, popular in African American communities
  "nate",    // Short form of Nathaniel, popular in African American communities
  "odell",   // English origin, popular in African American communities
  "pharrell", // African American origin
  "quentin", // Latin origin, meaning "fifth", popular in African American communities
  "raekwon", // African American origin
  "shaquille", // Arabic origin, meaning "handsome", popular in African American communities
  "tavon",   // African American origin
  "usher",   // English origin, meaning "doorkeeper", popular in African American communities
  "vince",   // Short form of Vincent, popular in African American communities
  "will",    // Short form of William, popular in African American communities
  "xavier",  // Arabic/Basque origin, popular in African American communities
  "yusuf",   // Arabic form of Joseph, popular in African American communities
  "zaire",   // African origin, named after the former name of Congo, popular in African American communities
  "antoine", // French origin, popular in African American communities
  "bryson",  // English origin, popular in African American communities
  "cordell", // Latin origin, popular in African American communities
  "devonte", // African American origin
  "elijah",  // Hebrew origin, meaning "Yahweh is God", popular in African American communities
  "fredrick", // Germanic origin, popular in African American communities
  "george",  // Greek origin, meaning "farmer", popular in African American communities
  "harold",  // Germanic origin, popular in African American communities
  "ishmael", // Hebrew origin, popular in African American communities
  
  // Female black names (50 names)
  "aaliyah", // Arabic origin, meaning "exalted" or "highly praised"
  "zuri",    // Swahili name meaning "beautiful"
  "gabrielle", // Hebrew name meaning "God is my strength"
  "destiny", // Latin origin, meaning "fate" or "the power of fate"
  "ava",     // Disputed origins, often associated with "life" or "living"
  "faith",   // Latin origin meaning "trust" or "belief"
  "nia",     // Swahili origin, meaning "purpose"
  "imani",   // Swahili name, meaning "faith"
  "laila",   // Arabic origin, meaning "night", popular in North Africa
  "keisha",  // African American variant of Keshia
  "latoya",  // African American name
  "tanisha", // African American name
  "amara",   // West African origin, meaning "grace"
  "nala",    // African origin, popularized by The Lion King
  "tiana",   // African American variant of Tatiana
  "zahra",   // Arabic origin, meaning "flower", common in North Africa
  "aisha",   // Arabic origin, meaning "alive and well", popular in Africa
  "ebony",   // English origin, meaning "dark wood", popular in African American communities
  "jasmine", // Persian origin, meaning "gift from God", popular in African American communities
  "kenya",   // African origin, named after the country
  "latisha", // African American variant of Letitia
  "monique", // French origin, meaning "advisor", popular in African American communities
  "shaniqua", // African American name
  "tamika",  // African American name
  "yara",    // Arabic origin, meaning "small butterfly", popular in North Africa
  "zendaya", // African origin, meaning "to give thanks"
  "alisha",  // Arabic origin, meaning "protected by God", popular in African American communities
  "bianca",  // Italian origin, meaning "white", popular in African American communities
  "diamond", // English origin, popular in African American communities
  "essence", // English origin, popular in African American communities
  "felicia", // Latin origin, meaning "happy", popular in African American communities
  "genesis", // Greek origin, meaning "beginning", popular in African American communities
  "heaven",  // English origin, popular in African American communities
  "india",   // English origin, named after the country, popular in African American communities
  "jada",    // Hebrew origin, meaning "wise", popular in African American communities
  "kiana",   // Hawaiian origin, meaning "divine", popular in African American communities
  "lakeisha", // African American name
  "maya",    // Hebrew/Greek origin, meaning "water", popular in African American communities
  "nadia",   // Slavic/Arabic origin, meaning "hope", popular in North Africa
  "octavia", // Latin origin, meaning "eighth", popular in African American communities
  "precious", // English origin, popular in African American communities
  "queen",   // English origin, popular in African American communities
  "raven",   // English origin, meaning "black bird", popular in African American communities
  "shanice", // African American name
  "tiara",   // Latin origin, meaning "crown", popular in African American communities
  "unique",  // English origin, popular in African American communities
  "vanessa", // Greek origin, popular in African American communities
  "willow",  // English origin, meaning "willow tree", popular in African American communities
  "xena",    // Greek origin, meaning "hospitable", popular in African American communities
  "yasmine", // Persian/Arabic origin, variant of Jasmine, popular in North Africa
  "zenobia", // Greek origin, meaning "life of Zeus", popular in African American communities
  "ashanti", // African origin, named after the ethnic group
  "bonita",  // Spanish origin, meaning "pretty", popular in African American communities
  "chanel",  // French origin, popular in African American communities
  "deja"     // French origin, popular in African American communities
];

// List of names commonly associated with white/Caucasian ethnicity
// Note: This is based on statistical frequency and not meant to be stereotypical or offensive
const whiteNames = [
  // Male white names (50 names)
  "john",     // Hebrew origin, meaning "God is gracious"
  "michael",  // Hebrew origin, meaning "Who is like God?"
  "william",  // Germanic origin, meaning "resolute protector"
  "james",    // Hebrew origin, meaning "supplanter"
  "robert",   // Germanic origin, meaning "bright fame"
  "thomas",   // Aramaic origin, meaning "twin"
  "david",    // Hebrew origin, meaning "beloved"
  "richard",  // Germanic origin, meaning "strong ruler"
  "joseph",   // Hebrew origin, meaning "he will add"
  "charles",  // Germanic origin, meaning "free man"
  "alexander", // Greek origin, meaning "defender of men", common in Europe
  "nicholas",  // Greek origin, meaning "victory of the people", popular in Western countries
  "daniel",    // Hebrew origin, meaning "God is my judge", common in Western countries
  "adam",      // Hebrew origin, meaning "man" or "earth", common in Western countries and Middle East
  "ryan",      // Irish origin, meaning "little king", popular in Western countries
  "patrick",   // Latin origin, meaning "nobleman", common in Ireland
  "sean",      // Irish form of John, common in Western countries
  "liam",      // Irish short form of William, popular in Western countries
  "andrew",    // Greek origin, meaning "manly", popular in Western countries
  "benjamin",  // Hebrew origin, meaning "son of the right hand", popular in Western countries
  "christopher", // Greek origin, meaning "Christ-bearer", popular in Western countries
  "dylan",     // Welsh origin, meaning "son of the sea", popular in Western countries
  "ethan",     // Hebrew origin, meaning "strong", popular in Western countries
  "frank",     // Germanic origin, meaning "free man", popular in Western countries
  "gregory",   // Greek origin, meaning "watchful", popular in Western countries
  "henry",     // Germanic origin, meaning "home ruler", popular in Western countries
  "ian",       // Scottish form of John, popular in Western countries
  "jacob",     // Hebrew origin, meaning "supplanter", popular in Western countries
  "kevin",     // Irish origin, meaning "handsome", popular in Western countries
  "luke",      // Greek origin, meaning "light-giving", popular in Western countries
  "matthew",   // Hebrew origin, meaning "gift of God", popular in Western countries
  "nathan",    // Hebrew origin, meaning "gift", popular in Western countries
  "oliver",    // Latin origin, meaning "olive tree", popular in Western countries
  "peter",     // Greek origin, meaning "rock", popular in Western countries
  "quentin",   // Latin origin, meaning "fifth", popular in Western countries
  "samuel",    // Hebrew origin, meaning "heard by God", popular in Western countries
  "timothy",   // Greek origin, meaning "honoring God", popular in Western countries
  "vincent",   // Latin origin, meaning "conquering", popular in Western countries
  "walter",    // Germanic origin, meaning "ruler of the army", popular in Western countries
  "xavier",    // Basque origin, meaning "new house", popular in Western countries
  "zachary",   // Hebrew origin, meaning "remembered by God", popular in Western countries
  "aaron",     // Hebrew origin, meaning "high mountain", popular in Western countries
  "brian",     // Irish origin, meaning "high", popular in Western countries
  "caleb",     // Hebrew origin, meaning "faithful", popular in Western countries
  "dennis",    // Greek origin, meaning "follower of Dionysus", popular in Western countries
  "edward",    // English origin, meaning "wealthy guardian", popular in Western countries
  "felix",     // Latin origin, meaning "happy", popular in Western countries
  "george",    // Greek origin, meaning "farmer", popular in Western countries
  "harry",     // Germanic origin, form of Henry, popular in Western countries
  "isaac",     // Hebrew origin, meaning "laughter", popular in Western countries
  
  // Female white names (50 names)
  "emma",     // Germanic origin, meaning "whole or universal", region: "Western countries"
  "olivia",   // Latin origin, meaning "olive tree", region: "Western countries"
  "sophia",   // Greek origin, meaning "wisdom", region: "Western countries"
  "isabella", // Hebrew origin, meaning "devoted to God", region: "Western countries"
  "charlotte", // French origin, meaning "free man", region: "Western countries"
  "amelia",   // Germanic origin, meaning "work", region: "Western countries"
  "harper",   // English origin, meaning "harp player", region: "Western countries"
  "evelyn",   // English origin, meaning "wished for child", region: "Western countries"
  "abigail",  // Hebrew origin, meaning "father's joy", region: "Western countries"
  "emily",    // Latin origin, meaning "rival", region: "Western countries"
  "sarah",    // Hebrew origin, meaning "princess", region: "Western countries"
  "elizabeth", // Hebrew origin, meaning "God is my oath", region: "Europe"
  "katherine", // Greek origin, meaning "pure", region: "Western countries"
  "hannah",    // Hebrew origin, meaning "grace", region: "Western countries"
  "samantha",  // Aramaic origin, meaning "listener", region: "Western countries"
  "maria",     // Latin form of Mary, region: "Europe and Latin America"
  "anna",      // Hebrew origin, meaning "grace", region: "Europe"
  "alice",     // Germanic origin, meaning "noble", region: "Popular in Europe"
  "amanda",    // Latin origin, meaning "worthy of love", region: "Popular in Western countries"
  "ashley",    // English origin, meaning "ash tree meadow", region: "Popular in Western countries"
  "audrey",    // Germanic origin, meaning "noble strength", region: "Popular in Europe"
  "bella",     // Italian origin, meaning "beautiful", region: "Popular in Europe"
  "brooke",    // English origin, meaning "small stream", region: "Popular in Western countries"
  "caroline",  // Latin origin, feminine form of Charles, region: "Popular in Europe"
  "chloe",     // Greek origin, meaning "blooming", region: "Popular in Europe"
  "claire",    // French origin, meaning "clear", region: "Popular in Western countries"
  "daisy",     // English origin, named after the flower, region: "Popular in Europe"
  "danielle",  // Hebrew origin, feminine form of Daniel, region: "Popular in Western countries"
  "eleanor",   // Greek origin, meaning "bright, shining one", region: "Popular in Europe"
  "ella",      // Germanic origin, meaning "fairy maiden", region: "Popular in Western countries"
  "ellie",     // Greek origin, short form of Eleanor, region: "Popular in Europe"
  "fiona",     // Gaelic origin, meaning "fair", region: "Popular in Europe"
  "gabriella", // Hebrew origin, feminine form of Gabriel, region: "Popular in Western countries"
  "georgia",   // Greek origin, feminine form of George, region: "Popular in Europe"
  "haley",     // English origin, meaning "hay meadow", region: "Popular in Western countries"
  "heather",   // English origin, named after the flowering plant, region: "Popular in Western countries"
  "holly",     // English origin, named after the tree, region: "Popular in Europe"
  "isabel",    // Spanish origin, variant of Elizabeth, region: "Popular in Western countries"
  "ivy",       // English origin, named after the plant, region: "Popular in Europe"
  "jacqueline", // French origin, feminine form of Jacques, region: "Popular in Western countries"
  "jane",      // Hebrew origin, feminine form of John, region: "Popular in Europe"
  "jennifer",  // Welsh origin, meaning "fair spirit", region: "Popular in Western countries"
  "jessica",   // Hebrew origin, meaning "God beholds", region: "Popular in Europe"
  "julia",     // Latin origin, feminine form of Julius, region: "Popular in Western countries"
  "katie",     // Greek origin, meaning "pure", region: "Popular in Western countries"
  "lauren",    // Latin origin, meaning "laurel tree", region: "Popular in Western countries"
  "leah",      // Hebrew origin, meaning "weary", region: "Popular in Europe"
  "lillian",   // Latin origin, meaning "lily flower", region: "Popular in Western countries"
  "lucy",      // Latin origin, meaning "light", region: "Popular in Europe"
  "madeline"   // Greek origin, meaning "high tower", region: "Popular in Europe"
],

// List of names commonly associated with white/Caucasian ethnicity
// Note: This is based on statistical frequency and not meant to be stereotypical or offensive
whiteNames = [
  "john",     // Hebrew origin, meaning "God is gracious"
  "michael",  // Hebrew origin, meaning "Who is like God?"
  "william",  // Germanic origin, meaning "resolute protector"
  "james",    // Hebrew origin, meaning "supplanter"
  "robert",   // Germanic origin, meaning "bright fame"
  "thomas",   // Aramaic origin, meaning "twin"
  "david",    // Hebrew origin, meaning "beloved"
  "richard",  // Germanic origin, meaning "strong ruler"
  "joseph",   // Hebrew origin, meaning "he will add"
  "charles",  // Germanic origin, meaning "free man"
  "emma",     // Germanic origin, meaning "whole" or "universal"
  "olivia",   // Latin origin, meaning "olive tree"
  "sophia",   // Greek origin, meaning "wisdom"
  "isabella", // Hebrew origin, meaning "devoted to God"
  "charlotte", // French origin, meaning "free man"
  "amelia",   // Germanic origin, meaning "work"
  "harper",   // English origin, meaning "harp player"
  "evelyn",   // English origin, meaning "wished for child"
  "abigail",  // Hebrew origin, meaning "father's joy"
  "emily",    // Latin origin, meaning "rival"
  // Additional white names
  "sarah",    // Hebrew origin, meaning "princess", common in Western countries
  "elizabeth", // Hebrew origin, meaning "God is my oath", common in Europe
  "katherine", // Greek origin, meaning "pure", popular in Western countries
  "alexander", // Greek origin, meaning "defender of men", common in Europe
  "nicholas",  // Greek origin, meaning "victory of the people", popular in Western countries
  "hannah",    // Hebrew origin, meaning "grace", common in Western countries
  "samantha",  // Aramaic origin, meaning "listener", popular in Western countries
  "daniel",    // Hebrew origin, meaning "God is my judge", common in Western countries
  "adam",      // Hebrew origin, meaning "man" or "earth", common in Western countries and Middle East
  "maria",     // Latin form of Mary, popular in Europe and Latin America
  "anna",      // Hebrew origin, meaning "grace", common in Europe
  "ryan",      // Irish origin, meaning "little king", popular in Western countries
  "patrick",   // Latin origin, meaning "nobleman", common in Ireland
  "sean",      // Irish form of John, common in Western countries
  "liam",      // Irish short form of William, popular in Western countries
  // Additional female white names
  "alice",     // Germanic origin, meaning "noble", popular in Europe
  "amanda",    // Latin origin, meaning "worthy of love", popular in Western countries
  "ashley",    // English origin, meaning "ash tree meadow", popular in Western countries
  "audrey",    // Germanic origin, meaning "noble strength", popular in Europe
  "ava",       // Latin/Germanic origin, meaning "life", popular in Western countries
  "bella",     // Italian origin, meaning "beautiful", popular in Europe
  "brooke",    // English origin, meaning "small stream", popular in Western countries
  "caroline",  // Latin origin, feminine form of Charles, popular in Europe
  "chloe",     // Greek origin, meaning "blooming", popular in Europe
  "claire",    // French origin, meaning "clear", popular in Western countries
  "daisy",     // English origin, named after the flower, popular in Europe
  "danielle",  // Hebrew origin, feminine form of Daniel, popular in Western countries
  "eleanor",   // Greek origin, meaning "bright, shining one", popular in Europe
  "ella",      // Germanic origin, meaning "fairy maiden", popular in Western countries
  "ellie",     // Greek origin, short form of Eleanor, popular in Europe
  "fiona",     // Gaelic origin, meaning "fair", popular in Europe
  "gabriella", // Hebrew origin, feminine form of Gabriel, popular in Western countries
  "georgia",   // Greek origin, feminine form of George, popular in Europe
  "haley",     // English origin, meaning "hay meadow", popular in Western countries
  "heather",   // English origin, named after the flowering plant, popular in Western countries
  "holly",     // English origin, named after the tree, popular in Europe
  "isabel",    // Spanish origin, variant of Elizabeth, popular in Western countries
  "ivy",       // English origin, named after the plant, popular in Europe
  "jacqueline", // French origin, feminine form of Jacques, popular in Western countries
  "jane",      // Hebrew origin, feminine form of John, popular in Europe
  "jennifer",  // Welsh origin, meaning "fair spirit", popular in Western countries
  "jessica",   // Hebrew origin, meaning "God beholds", popular in Europe
  "julia",     // Latin origin, feminine form of Julius, popular in Western countries
  "kimberly",  // English origin, meaning "from the royal fortress meadow", popular in Europe
  "lauren",    // Latin origin, meaning "laurel tree", popular in Western countries
  "leah",      // Hebrew origin, meaning "weary", popular in Europe
  "lillian",   // Latin origin, meaning "lily flower", popular in Western countries
  "lucy",      // Latin origin, meaning "light", popular in Europe
  "mackenzie", // Scottish origin, meaning "son of Kenneth", popular in Western countries
  "madeline",  // Greek origin, meaning "high tower", popular in Europe
  "margaret",  // Greek origin, meaning "pearl", popular in Western countries
  "mary",      // Hebrew origin, meaning "bitter", popular in Western countries
  "megan",     // Welsh origin, meaning "pearl", popular in Europe
  "melissa",   // Greek origin, meaning "honey bee", popular in Western countries
  "mia",       // Italian origin, meaning "mine", popular in Europe
  "michelle",  // French origin, feminine form of Michael, popular in Western countries
  "molly",     // Hebrew origin, variant of Mary, popular in Europe
  "morgan",    // Welsh origin, meaning "sea circle", popular in Western countries
  "natalie",   // Latin origin, meaning "birthday of the Lord", popular in Europe
  "nicole",    // Greek origin, feminine form of Nicholas, popular in Western countries
  "paige",     // English origin, meaning "young helper", popular in Europe
  "patricia",  // Latin origin, meaning "noble", popular in Western countries
  "penelope",  // Greek origin, meaning "weaver", popular in Europe
  "rachel",    // Hebrew origin, meaning "ewe", popular in Western countries
  "rebecca",   // Hebrew origin, meaning "to bind", popular in Europe
  "ruby",      // Latin origin, named after the gemstone, popular in Western countries
  "scarlett",  // English origin, meaning "scarlet", popular in Western countries
  "stephanie", // Greek origin, feminine form of Stephen, popular in Western countries
  "taylor",    // English origin, meaning "tailor", popular in Europe
  "victoria",  // Latin origin, meaning "victory", popular in Western countries
  "violet",    // Latin origin, named after the flower, popular in Europe
  "zoe"        // Greek origin, meaning "life", popular in Western countries
],

// Name origins and meanings for enhanced classification
let nameInfo = {


  // Black names info
  "aaliyah": { origin: "Arabic", meaning: "exalted or highly praised", region: "North Africa" },
  "jamal": { origin: "Arabic", meaning: "handsome or beauty", region: "Most of Africa" },
  "zuri": { origin: "Swahili", meaning: "beautiful", region: "East Africa" },
  "aiden": { origin: "Irish", meaning: "little fire" },
  "gabrielle": { origin: "Hebrew", meaning: "God is my strength" },
  "destiny": { origin: "Latin", meaning: "fate or the power of fate" },
  "ava": { origin: "Disputed", meaning: "life or living" },
  "faith": { origin: "Latin", meaning: "trust or belief" },
  "nia": { origin: "Swahili", meaning: "purpose", region: "East Africa" },
  "imani": { origin: "Swahili", meaning: "faith", region: "East Africa" },
  "ahmed": { origin: "Arabic", meaning: "highly praised", region: "North Africa" },
  "kwame": { origin: "Ghanaian", meaning: "born on Saturday", region: "West Africa" },
  "laila": { origin: "Arabic", meaning: "night", region: "North Africa" },
  "omar": { origin: "Arabic", meaning: "flourishing", region: "East Africa" },
  "keisha": { origin: "African American", meaning: "favorite" },
  "latoya": { origin: "African American", meaning: "victorious" },
  "rashad": { origin: "Arabic", meaning: "good judgment", region: "North Africa" },
  "tanisha": { origin: "African American", meaning: "born on Monday" },
  "hakeem": { origin: "Arabic", meaning: "wise", region: "West Africa" },
  "amara": { origin: "West African", meaning: "grace", region: "West Africa" },
  "jabari": { origin: "Swahili", meaning: "brave", region: "East Africa" },
  "kofi": { origin: "Ghanaian", meaning: "born on Friday", region: "West Africa" },
  "nala": { origin: "African", meaning: "gift", region: "East Africa" },
  "tiana": { origin: "African American", meaning: "princess" },
  "zahra": { origin: "Arabic", meaning: "flower", region: "North Africa" },
  "aisha": { origin: "Arabic", meaning: "alive and well", region: "Popular in Africa" },
  "ebony": { origin: "English", meaning: "dark wood", region: "Popular in African American communities" },
  "jasmine": { origin: "Persian", meaning: "gift from God", region: "Popular in African American communities" },
  "kenya": { origin: "African", meaning: "animal horn", region: "Named after the country" },
  "latisha": { origin: "African American", meaning: "joy", region: "Variant of Letitia" },
  "monique": { origin: "French", meaning: "advisor", region: "Popular in African American communities" },
  "shaniqua": { origin: "African American", meaning: "God is gracious", region: "Originated in African American communities" },
  "tamika": { origin: "African American", meaning: "people", region: "Originated in African American communities" },
  "yara": { origin: "Arabic", meaning: "small butterfly", region: "Popular in North Africa" },
  "zendaya": { origin: "African", meaning: "to give thanks", region: "Originated in African American communities" },
  "alisha": { origin: "Arabic", meaning: "protected by God", region: "Popular in African American communities" },
  "bianca": { origin: "Italian", meaning: "white", region: "Popular in African American communities" },
  "diamond": { origin: "English", meaning: "precious gemstone", region: "Popular in African American communities" },
  "essence": { origin: "English", meaning: "fundamental nature", region: "Popular in African American communities" },
  "felicia": { origin: "Latin", meaning: "happy", region: "Popular in African American communities" },
  "genesis": { origin: "Greek", meaning: "beginning", region: "Popular in African American communities" },
  "heaven": { origin: "English", meaning: "sky or paradise", region: "Popular in African American communities" },
  "india": { origin: "English", meaning: "named after the country", region: "Popular in African American communities" },
  "jada": { origin: "Hebrew", meaning: "wise", region: "Popular in African American communities" },
  "kiana": { origin: "Hawaiian", meaning: "divine", region: "Popular in African American communities" },
  "lakeisha": { origin: "African American", meaning: "joyful", region: "Originated in African American communities" },
  "maya": { origin: "Hebrew/Greek", meaning: "water", region: "Popular in African American communities" },
  "nadia": { origin: "Slavic/Arabic", meaning: "hope", region: "Popular in North Africa" },
  "octavia": { origin: "Latin", meaning: "eighth", region: "Popular in African American communities" },
  "precious": { origin: "English", meaning: "of great value", region: "Popular in African American communities" },
  "queen": { origin: "English", meaning: "female ruler", region: "Popular in African American communities" },
  "raven": { origin: "English", meaning: "black bird", region: "Popular in African American communities" },
  "shanice": { origin: "African American", meaning: "God is gracious", region: "Originated in African American communities" },
  "tiara": { origin: "Latin", meaning: "crown", region: "Popular in African American communities" },
  "unique": { origin: "English", meaning: "one of a kind", region: "Popular in African American communities" },
  "vanessa": { origin: "Greek", meaning: "butterfly", region: "Popular in African American communities" },
  "willow": { origin: "English", meaning: "willow tree", region: "Popular in African American communities" },
  "xena": { origin: "Greek", meaning: "hospitable", region: "Popular in African American communities" },
  "yasmine": { origin: "Persian/Arabic", meaning: "jasmine flower", region: "Popular in North Africa" },
  "zenobia": { origin: "Greek", meaning: "life of Zeus", region: "Popular in African American communities" },
  "ashanti": { origin: "African", meaning: "named after the ethnic group", region: "West African" },
  "bonita": { origin: "Spanish", meaning: "pretty", region: "Popular in African American communities" },
  "chanel": { origin: "French", meaning: "channel", region: "Popular in African American communities" },
  "deja": { origin: "French", meaning: "already", region: "Popular in African American communities" },
  "eboni": { origin: "English", meaning: "dark wood", region: "Variant of Ebony" },
  "fatima": { origin: "Arabic", meaning: "one who abstains", region: "Popular in North Africa" },
  "gianna": { origin: "Italian", meaning: "God is gracious", region: "Popular in African American communities" },
  "hazel": { origin: "English", meaning: "hazel tree", region: "Popular in African American communities" },
  "jamila": { origin: "Arabic", meaning: "beautiful", region: "Popular in North Africa" },
  "kadija": { origin: "Arabic", meaning: "trustworthy", region: "Variant of Khadijah" },
  "london": { origin: "English", meaning: "named after the city", region: "Popular in African American communities" },
  "malia": { origin: "Hawaiian", meaning: "calm, peaceful", region: "Popular in African American communities" },
  "nevaeh": { origin: "English", meaning: "heaven spelled backwards", region: "Popular in African American communities" },
  "oriana": { origin: "Latin", meaning: "dawn", region: "Popular in African American communities" },
  "paris": { origin: "French", meaning: "named after the city", region: "Popular in African American communities" },
  "quiana": { origin: "African American", meaning: "divine", region: "Originated in African American communities" },
  "rochelle": { origin: "French", meaning: "little rock", region: "Popular in African American communities" },
  "sierra": { origin: "Spanish", meaning: "mountain range", region: "Popular in African American communities" },
  "talia": { origin: "Hebrew", meaning: "dew from God", region: "Popular in African American communities" },
  "ursula": { origin: "Latin", meaning: "little female bear", region: "Popular in African American communities" },
  "valencia": { origin: "Spanish", meaning: "strong, healthy", region: "Popular in African American communities" },
  "whitney": { origin: "English", meaning: "white island", region: "Popular in African American communities" },
  "xiomara": { origin: "Spanish", meaning: "famous in battle", region: "Popular in African American communities" },
  "yazmin": { origin: "Persian/Arabic", meaning: "jasmine flower", region: "Popular in North Africa" },
  "zaria": { origin: "Arabic", meaning: "princess", region: "Popular in North Africa" },
  
  // White names info
  // Male white names
  "john": { origin: "Hebrew", meaning: "God is gracious", region: "Western countries" },
  "michael": { origin: "Hebrew", meaning: "Who is like God?", region: "Western countries" },
  "william": { origin: "Germanic", meaning: "resolute protector", region: "Western countries" },
  "james": { origin: "Hebrew", meaning: "supplanter", region: "Western countries" },
  "robert": { origin: "Germanic", meaning: "bright fame", region: "Western countries" },
  "thomas": { origin: "Aramaic", meaning: "twin", region: "Western countries" },
  "david": { origin: "Hebrew", meaning: "beloved", region: "Western countries" },
  "richard": { origin: "Germanic", meaning: "strong ruler", region: "Western countries" },
  "joseph": { origin: "Hebrew", meaning: "he will add", region: "Western countries" },
  "charles": { origin: "Germanic", meaning: "free man", region: "Western countries" },
  "christopher": { origin: "Greek", meaning: "Christ-bearer", region: "Western countries" },
  "daniel": { origin: "Hebrew", meaning: "God is my judge", region: "Western countries" },
  "matthew": { origin: "Hebrew", meaning: "gift of God", region: "Western countries" },
  "anthony": { origin: "Latin", meaning: "priceless one", region: "Western countries" },
  "donald": { origin: "Scottish", meaning: "world ruler", region: "Western countries" },
  "mark": { origin: "Latin", meaning: "warlike", region: "Western countries" },
  "paul": { origin: "Latin", meaning: "small", region: "Western countries" },
  "steven": { origin: "Greek", meaning: "crown", region: "Western countries" },
  "andrew": { origin: "Greek", meaning: "manly", region: "Western countries" },
  "kenneth": { origin: "Scottish", meaning: "handsome", region: "Western countries" },
  "george": { origin: "Greek", meaning: "farmer", region: "Western countries" },
  "joshua": { origin: "Hebrew", meaning: "God is salvation", region: "Western countries" },
  "kevin": { origin: "Irish", meaning: "handsome", region: "Western countries" },
  "brian": { origin: "Irish", meaning: "high, noble", region: "Western countries" },
  "edward": { origin: "English", meaning: "wealthy guardian", region: "Western countries" },
  "ronald": { origin: "Norse", meaning: "ruler's counselor", region: "Western countries" },
  "timothy": { origin: "Greek", meaning: "honoring God", region: "Western countries" },
  "jason": { origin: "Greek", meaning: "healer", region: "Western countries" },
  "jeffrey": { origin: "Germanic", meaning: "peace", region: "Western countries" },
  "ryan": { origin: "Irish", meaning: "little king", region: "Western countries" },
  "jacob": { origin: "Hebrew", meaning: "supplanter", region: "Western countries" },
  "gary": { origin: "Germanic", meaning: "spear", region: "Western countries" },
  "nicholas": { origin: "Greek", meaning: "victory of the people", region: "Western countries" },
  "eric": { origin: "Norse", meaning: "eternal ruler", region: "Western countries" },
  "stephen": { origin: "Greek", meaning: "crown", region: "Western countries" },
  "jonathan": { origin: "Hebrew", meaning: "gift of God", region: "Western countries" },
  "larry": { origin: "Latin", meaning: "from Laurentum", region: "Western countries" },
  "justin": { origin: "Latin", meaning: "just", region: "Western countries" },
  "scott": { origin: "Scottish", meaning: "from Scotland", region: "Western countries" },
  "brandon": { origin: "English", meaning: "beacon hill", region: "Western countries" },
  "benjamin": { origin: "Hebrew", meaning: "son of the right hand", region: "Western countries" },
  "samuel": { origin: "Hebrew", meaning: "heard by God", region: "Western countries" },
  "gregory": { origin: "Latin", meaning: "watchful, alert", region: "Western countries" },
  "alexander": { origin: "Greek", meaning: "defender of men", region: "Western countries" },
  "patrick": { origin: "Latin", meaning: "nobleman", region: "Western countries" },
  "frank": { origin: "Germanic", meaning: "free man", region: "Western countries" },
  "raymond": { origin: "Germanic", meaning: "wise protector", region: "Western countries" },
  "jack": { origin: "English", meaning: "God is gracious", region: "Western countries" },
  "dennis": { origin: "Greek", meaning: "follower of Dionysus", region: "Western countries" },
  "jerry": { origin: "Germanic", meaning: "spear ruler", region: "Western countries" },
  "tyler": { origin: "English", meaning: "tile maker", region: "Western countries" },
  "aaron": { origin: "Hebrew", meaning: "high mountain", region: "Western countries" },
  
  // Female white names
  "emma": { origin: "Germanic", meaning: "whole or universal", region: "Western countries" },
  "olivia": { origin: "Latin", meaning: "olive tree", region: "Western countries" },
  "sophia": { origin: "Greek", meaning: "wisdom", region: "Western countries" },
  "isabella": { origin: "Hebrew", meaning: "devoted to God", region: "Western countries" },
  "charlotte": { origin: "French", meaning: "free man", region: "Western countries" },
  "amelia": { origin: "Germanic", meaning: "work", region: "Western countries" },
  "harper": { origin: "English", meaning: "harp player", region: "Western countries" },
  "evelyn": { origin: "English", meaning: "wished for child", region: "Western countries" },
  "abigail": { origin: "Hebrew", meaning: "father's joy", region: "Western countries" },
  "emily": { origin: "Latin", meaning: "rival", region: "Western countries" },
  "sarah": { origin: "Hebrew", meaning: "princess", region: "Western countries" },
  "elizabeth": { origin: "Hebrew", meaning: "God is my oath", region: "Europe" },
  "katherine": { origin: "Greek", meaning: "pure", region: "Western countries" },
  "alexander": { origin: "Greek", meaning: "defender of men", region: "Europe" },
  "nicholas": { origin: "Greek", meaning: "victory of the people", region: "Western countries" },
  "hannah": { origin: "Hebrew", meaning: "grace", region: "Western countries" },
  "samantha": { origin: "Aramaic", meaning: "listener", region: "Western countries" },
  "daniel": { origin: "Hebrew", meaning: "God is my judge", region: "Western countries" },
  "adam": { origin: "Hebrew", meaning: "man or earth", region: "Western countries and Middle East" },
  "maria": { origin: "Latin", meaning: "star of the sea", region: "Europe and Latin America" },
  "anna": { origin: "Hebrew", meaning: "grace", region: "Europe" },
  "ryan": { origin: "Irish", meaning: "little king", region: "Western countries" },
  "patrick": { origin: "Latin", meaning: "nobleman", region: "Ireland" },
  "sean": { origin: "Irish", meaning: "God is gracious", region: "Western countries" },
  "liam": { origin: "Irish", meaning: "resolute protector", region: "Western countries" },
  "alice": { origin: "Germanic", meaning: "noble", region: "Popular in Europe" },
  "amanda": { origin: "Latin", meaning: "worthy of love", region: "Popular in Western countries" },
  "ashley": { origin: "English", meaning: "ash tree meadow", region: "Popular in Western countries" },
  "audrey": { origin: "Germanic", meaning: "noble strength", region: "Popular in Europe" },
  "bella": { origin: "Italian", meaning: "beautiful", region: "Popular in Europe" },
  "brooke": { origin: "English", meaning: "small stream", region: "Popular in Western countries" },
  "caroline": { origin: "Latin", meaning: "free man", region: "Popular in Europe" },
  "chloe": { origin: "Greek", meaning: "blooming", region: "Popular in Europe" },
  "claire": { origin: "French", meaning: "clear", region: "Popular in Western countries" },
  "daisy": { origin: "English", meaning: "day's eye", region: "Popular in Europe" },
  "danielle": { origin: "Hebrew", meaning: "God is my judge", region: "Popular in Western countries" },
  "eleanor": { origin: "Greek", meaning: "bright, shining one", region: "Popular in Europe" },
  "ella": { origin: "Germanic", meaning: "fairy maiden", region: "Popular in Western countries" },
  "ellie": { origin: "Greek", meaning: "bright, shining one", region: "Popular in Europe" },
  "fiona": { origin: "Gaelic", meaning: "fair", region: "Popular in Europe" },
  "gabriella": { origin: "Hebrew", meaning: "God is my strength", region: "Popular in Western countries" },
  "georgia": { origin: "Greek", meaning: "farmer", region: "Popular in Europe" },
  "haley": { origin: "English", meaning: "hay meadow", region: "Popular in Western countries" },
  "heather": { origin: "English", meaning: "flowering plant", region: "Popular in Western countries" },
  "holly": { origin: "English", meaning: "holly tree", region: "Popular in Europe" },
  "isabel": { origin: "Spanish", meaning: "God is my oath", region: "Popular in Western countries" },
  "ivy": { origin: "English", meaning: "climbing plant", region: "Popular in Europe" },
  "jacqueline": { origin: "French", meaning: "supplanter", region: "Popular in Western countries" },
  "jane": { origin: "Hebrew", meaning: "God is gracious", region: "Popular in Europe" },
  "jennifer": { origin: "Welsh", meaning: "fair spirit", region: "Popular in Western countries" },
  "jessica": { origin: "Hebrew", meaning: "God beholds", region: "Popular in Europe" },
  "julia": { origin: "Latin", meaning: "youthful", region: "Popular in Western countries" },
  "katie": { origin: "Greek", meaning: "pure", region: "Popular in Western countries" },
  "kimberly": { origin: "English", meaning: "from the royal fortress meadow", region: "Popular in Europe" },
  "lauren": { origin: "Latin", meaning: "laurel tree", region: "Popular in Western countries" },
  "leah": { origin: "Hebrew", meaning: "weary", region: "Popular in Europe" },
  "lillian": { origin: "Latin", meaning: "lily flower", region: "Popular in Western countries" },
  "lucy": { origin: "Latin", meaning: "light", region: "Popular in Europe" },
  "mackenzie": { origin: "Scottish", meaning: "son of Kenneth", region: "Popular in Western countries" },
  "madeline": { origin: "Greek", meaning: "high tower", region: "Popular in Europe" },
  "margaret": { origin: "Greek", meaning: "pearl", region: "Popular in Western countries" },
  "mary": { origin: "Hebrew", meaning: "bitter", region: "Popular in Western countries" },
  "megan": { origin: "Welsh", meaning: "pearl", region: "Popular in Europe" },
  "melissa": { origin: "Greek", meaning: "honey bee", region: "Popular in Western countries" },
  "mia": { origin: "Italian", meaning: "mine", region: "Popular in Europe" },
  "michelle": { origin: "French", meaning: "who is like God", region: "Popular in Western countries" },
  "molly": { origin: "Hebrew", meaning: "bitter", region: "Popular in Europe" },
  "morgan": { origin: "Welsh", meaning: "sea circle", region: "Popular in Western countries" },
  "natalie": { origin: "Latin", meaning: "birthday of the Lord", region: "Popular in Europe" },
  "nicole": { origin: "Greek", meaning: "victory of the people", region: "Popular in Western countries" },
  "paige": { origin: "English", meaning: "young helper", region: "Popular in Europe" },
  "patricia": { origin: "Latin", meaning: "noble", region: "Popular in Western countries" },
  "penelope": { origin: "Greek", meaning: "weaver", region: "Popular in Europe" },
  "rachel": { origin: "Hebrew", meaning: "ewe", region: "Popular in Western countries" },
  "rebecca": { origin: "Hebrew", meaning: "to bind", region: "Popular in Europe" },
  "ruby": { origin: "Latin", meaning: "red gemstone", region: "Popular in Western countries" },
  "scarlett": { origin: "English", meaning: "scarlet", region: "Popular in Western countries" },
  "stephanie": { origin: "Greek", meaning: "crown", region: "Popular in Western countries" },
  "taylor": { origin: "English", meaning: "tailor", region: "Popular in Europe" },
  "victoria": { origin: "Latin", meaning: "victory", region: "Popular in Western countries" },
  "violet": { origin: "Latin", meaning: "purple flower", region: "Popular in Europe" },
  "zoe": { origin: "Greek", meaning: "life", region: "Popular in Western countries" }
};

function classifyName(name) {
  // Clean the input name
  let cleanName = name.trim().toLowerCase();
  
  // Direct match check for black names
  if (blackNames.includes(cleanName)) {
    // If we have additional information about the name, include it
    if (nameInfo[cleanName]) {
      const info = nameInfo[cleanName];
      let result = `${name} is considered a common black name. It has ${info.origin} origins and means "${info.meaning}"`;
      if (info.region) {
        result += `, commonly found in ${info.region}`;
      }
      return result + ".";
    }
    return `${name} is considered a very common black name.`;
  }
  
  // Direct match check for white names
  if (whiteNames.includes(cleanName)) {
    // If we have additional information about the name, include it
    if (nameInfo[cleanName]) {
      const info = nameInfo[cleanName];
      let result = `${name} is considered a common white name. It has ${info.origin} origins and means "${info.meaning}"`;
      if (info.region) {
        result += `, commonly found in ${info.region}`;
      }
      return result + ".";
    }
    return `${name} is considered a very common white name.`;
  }
  
  // Check for name origins that are common in black names
  const blackCommonOrigins = ["Arabic", "Swahili", "African", "West African", "East African", "Ghanaian"];
  const blackCommonRegions = ["North Africa", "East Africa", "West Africa", "Most of Africa"];
  const blackCommonEndings = ['ius', 'ell', 'on', 'us', 'is', 'ah', 'ity', 'ani'];
  
  // Check for name origins that are common in white names
  const whiteCommonOrigins = ["Germanic", "English", "French", "Irish", "Scottish"];
  const whiteCommonRegions = ["Western countries", "Europe", "Ireland"];
  const whiteCommonEndings = ['son', 'ton', 'ley', 'er', 'en', 'ey', 'man'];
  
  // Check for similarity with black names
  for (const blackName of blackNames) {
    // Check if the name starts with the same letters as any black name
    if (cleanName.startsWith(blackName.substring(0, 3)) || blackName.startsWith(cleanName.substring(0, 3))) {
      // If we have info about the similar name, include it
      if (nameInfo[blackName]) {
        const info = nameInfo[blackName];
        let result = `${name} has some similarity to ${blackName}, which is a common black name of ${info.origin} origin meaning "${info.meaning}"`;
        if (info.region) {
          result += `, commonly found in ${info.region}`;
        }
        return result + ".";
      }
      return `${name} has some similarity to common black names.`;
    }
  }
  
  // Check for similarity with white names
  for (const whiteName of whiteNames) {
    // Check if the name starts with the same letters as any white name
    if (cleanName.startsWith(whiteName.substring(0, 3)) || whiteName.startsWith(cleanName.substring(0, 3))) {
      // If we have info about the similar name, include it
      if (nameInfo[whiteName]) {
        const info = nameInfo[whiteName];
        let result = `${name} has some similarity to ${whiteName}, which is a common white name of ${info.origin} origin meaning "${info.meaning}"`;
        if (info.region) {
          result += `, commonly found in ${info.region}`;
        }
        return result + ".";
      }
      return `${name} has some similarity to common white names.`;
    }
  }
  
  // Check for common endings in black names
  for (const ending of blackCommonEndings) {
    if (cleanName.endsWith(ending)) {
      return `${name} has endings common in black names.`;
    }
  }
  
  // Check for common endings in white names
  for (const ending of whiteCommonEndings) {
    if (cleanName.endsWith(ending)) {
      return `${name} has endings common in white names.`;
    }
  }
  
  // Special check for Arabic names that could be used by both black and white communities
  if (cleanName.length >= 3) {
    for (const nameKey in nameInfo) {
      if (nameInfo[nameKey].origin === "Arabic") {
        if (nameInfo[nameKey].region && blackCommonRegions.includes(nameInfo[nameKey].region)) {
          if (cleanName.includes(nameKey.substring(0, 3)) || nameKey.includes(cleanName.substring(0, 3))) {
            return `${name} may have Arabic origins commonly associated with black communities in ${nameInfo[nameKey].region}.`;
          }
        } else if (nameInfo[nameKey].region && nameInfo[nameKey].region.includes("Middle East")) {
          if (cleanName.includes(nameKey.substring(0, 3)) || nameKey.includes(cleanName.substring(0, 3))) {
            return `${name} may have Arabic origins commonly associated with Middle Eastern communities.`;
          }
        }
      }
    }
  }
  
  // Check if the name might have origins common in black names
  for (const nameKey in nameInfo) {
    if (nameInfo[nameKey].origin && blackCommonOrigins.includes(nameInfo[nameKey].origin)) {
      let result = `${name} doesn't match our common black names, but it might have origins (like ${nameInfo[nameKey].origin}) that are common in the black community`;
      if (nameInfo[nameKey].region && blackCommonRegions.includes(nameInfo[nameKey].region)) {
        result += `, particularly in ${nameInfo[nameKey].region}`;
      }
      return result + ".";
    }
  }
  
  // Check if the name might have origins common in white names
  for (const nameKey in nameInfo) {
    if (nameInfo[nameKey].origin && whiteCommonOrigins.includes(nameInfo[nameKey].origin)) {
      let result = `${name} doesn't match our common white names, but it might have origins (like ${nameInfo[nameKey].origin}) that are common in the white community`;
      if (nameInfo[nameKey].region && whiteCommonRegions.includes(nameInfo[nameKey].region)) {
        result += `, particularly in ${nameInfo[nameKey].region}`;
      }
      return result + ".";
    }
  }
  
  // If no match is found in either database
  return `We don't have enough information to classify ${name} as either a common black or white name based on our database.`;
}

// Test the function with some examples
console.log(classifyName("Jamal")); // Should be classified as a black name
console.log(classifyName("William")); // Should be classified as a white name
console.log(classifyName("Emma")); // Should be classified as a white name
console.log(classifyName("Charlotte")); // Should be classified as a white name
console.log(classifyName("Darius")); // Should be classified as a black name
console.log(classifyName("Tyrone")); // Should be classified as a black name

// Test with new Arabic names
console.log(classifyName("Ahmed")); // Should be classified as a black name with Arabic origin in North Africa
console.log(classifyName("Laila")); // Should be classified as a black name with Arabic origin in North Africa
console.log(classifyName("Omar")); // Should be classified as a black name with Arabic origin in East Africa
console.log(classifyName("Adam")); // Should be classified as a white name with Hebrew origin in Western countries and Middle East

// Test with African regional names
console.log(classifyName("Kwame")); // Should be classified as a black name with Ghanaian origin in West Africa
console.log(classifyName("Kofi")); // Should be classified as a black name with Ghanaian origin in West Africa
console.log(classifyName("Jabari")); // Should be classified as a black name with Swahili origin in East Africa

// Test with names not in either database
console.log(classifyName("Alex")); // Not in either database
console.log(classifyName("Taylor")); // Not in either database
console.log(classifyName("Jordan")); // Not in either database
console.log(classifyName("Mohammed")); // Not directly in database but should detect Arabic origin

// Function to classify multiple names
function classifyMultipleNames(names) {
  return names.map(name => classifyName(name));
}

// Make the functions and data available in both browser and Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  module.exports = {
    classifyName,
    classifyMultipleNames,
    blackNames,
    whiteNames,
    nameInfo
  };
}