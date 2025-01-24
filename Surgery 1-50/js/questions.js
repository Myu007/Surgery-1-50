// Questions array
const questions = [
    {
        "numb": 1,
        "question": "Who was the founder of antiseptics in surgery?",
        "answer": "D. Lister",
        "options": [
            "N.I. Pirogov",
            "J.N. Korvisar",
            "D. Lister",
            "A.V. Sechenov",
            "I.F. Bush"
        ]
    },
    {
        "numb": 2,
        "question": "Who proved the circular rotation of blood in the body during the Renaissance?",
        "answer": "Garvey V.",
        "options": [
            "Vesalius A.",
            "Ibn Sina",
            "Galen",
            "Pare A.",
            "Garvey V."
        ]
    },
    {
        "numb": 3,
        "question": "Who was the founder of microbiology?",
        "answer": "L. Pasteur",
        "options": [
            "Jenner",
            "D. Lister",
            "Ibn Sina",
            "L. Pasteur",
            "Hippocrates"
        ]
    },
    {
        "numb": 4,
        "question": "Who discovered the filtering virus?",
        "answer": "Ivanovsky",
        "options": [
            "G. Helmholtz",
            "I.F. Bush",
            "A.V. Sechenov",
            "J.N. Korvisar",
            "Ivanovsky"
        ]
    },
    {
        "numb": 5,
        "question": "Thanks to whom did a new stage in the development of the anatomical direction in medicine begin - the creation of the doctrine of tissues?",
        "answer": "K. Bisha",
        "options": [
            "K. Bisha",
            "K. Rokitansky",
            "I.F. Bush",
            "R. Virchow",
            "J.N. Korvisar"
        ]
    },
    {
        "numb": 6,
        "question": "Who of the above was a pediatrician of the second half of the XIX century?",
        "answer": "Filatov N.F.",
        "options": [
            "Ivanovsky",
            "Sklifosovsky N.V.",
            "Sechenov A.V.",
            "Filatov N.F.",
            "Botkin S.P."
        ]
    },
    {
        "numb": 7,
        "question": "Choose an ancient civilization in which surgery had the highest level of developmet:",
        "answer": "Ancient India",
        "options": [
            "Ancient China",
            "Ancient Greece",
            "Ancient Egypt",
            "Ancient Rome",
            "Ancient India"
        ]
    },
    {
        "numb": 8,
        "question": "Choose a famous doctor of Ancient Greece:",
        "answer": "Hippocrates",
        "options": [
            "Galen",
            "Hippocrates",
            "Sushruta",
            "Garvey",
            "Avicenna"
        ]
    },
    {
        "numb": 9,
        "question": "Asepsis is a set of measures:",
        "answer": "to prevent infection from entering the wound",
        "options": [
            "to sterilize instruments",
            "to disinfect the rooms",
            "to combat infection in the wound",
            "to prevent infection from entering the wound",
            "to disinfect instruments"
        ]
    },
    {
        "numb": 10,
        "question": "Who was the founder of asepsis?",
        "answer": "Bergman",
        "options": [
            "Lister",
            "Bergman",
            "Pasteur",
            "Bush",
            "Dyakonov"
        ]
    },
    {
        "numb": 11,
        "question": "What is the sterilization?",
        "answer": "destruction of all microorganisms, including spore-forming ones",
        "options": [
            "destruction of opportunistic microorganisms on instruments after their use",
            "a set of measures to prevent microbes from entering the wound",
            "destruction of all microorganisms, including spore-forming ones",
            "destruction of pathogenic microbes",
            "mechanical removal of microorganisms from the surgace of medical devices"
        ]
    },
    {
        "numb": 12,
        "question": "Which method is a physical sterilization?",
        "answer": "autoclaving",
        "options": [
            "immersion in a 70% ethyl acohol solution",
            "exposure to formalin vapors",
            "immersion in an iodine solution",
            "immersion in a 6% hydrogen peroxide solution",
            "autoclaving"
        ]
    },
    {
        "numb": 13,
        "question": "What is the optimal methodd of preoperative hand treatment in terms of time and efficiency?",
        "answer": "pervomur",
        "options": [
            "according to Lister",
            "according to Alfeld",
            "according to Furbringer",
            "pervomur",
            "according to Spasokukotsky-Kochergin"
        ]
    },
    {
        "numb": 14,
        "question": "What is usesd to control the quality of preoperative hand treatment?",
        "answer": "bacteriological control",
        "options": [
            "Mikulich's method",
            "amidopyrine test",
            "bacteriological control",
            "phenolphthalein test",
            "thermal indicators"
        ]
    },
    {
        "numb": 15,
        "question": "Which solution of ammonia is used to wash hands according to Spasokukotsky-Kochergin?",
        "answer": "0.50%",
        "options": [
            "0.50%",
            "3%",
            "1.50%",
            "1%",
            "2%"
        ]
    },
    {
        "numb": 16,
        "question": "How long is the general cleaning in the operating unit carried out?",
        "answer": "1 time in a week",
        "options": [
            "1 time in a week",
            "1 time in a day",
            "1 time in a month",
            "1 time in 10 days",
            "1 time in 2 weeks"
        ]
    },
    {
        "numb": 17,
        "question": "How many hours does the sterility of the open bix remain?",
        "answer": "6 hours",
        "options": [
            "10 hours",
            "24 hours",
            "6 hours",
            "12 hours",
            "8 hours"
        ]
    },
    {
        "numb": 18,
        "question": "The storage period of a closed sterile bix without a filter is no more than:",
        "answer": "3 days",
        "options": [
            "2 days",
            "6 hours",
            "3 days",
            "1 day",
            "20 days"
        ]
    },
    {
        "numb": 19,
        "question": "When packing the bix by type, they put in it:",
        "answer": "only one type of material",
        "options": [
            "everything necessary for a certain operation",
            "necessary during the working day of the dressing room",
            "only one type of material",
            "necessary for the surgeon",
            "necessary for preparing the operating nurse for the operation"
        ]
    },
    {
        "numb": 20,
        "question": "Anesthetic and respiratory equipment is disinfected with a solution of:",
        "answer": "3% hydrogen peroxide - 60 min",
        "options": [
            "3% hydrogen peroxide - 60 min",
            "96% ethyl alcohol - 20 min",
            "1% chloramine - 60 min",
            "96% ethyl alcohol - 10 min",
            "10% formaldehyde - 10 min"
        ]
    },
    {
        "numb": 21,
        "question": "Antiseptic is a method of prevention of:",
        "answer": "endogenous and exogenous infection",
        "options": [
            "exogenous infection",
            "endogenous infection",
            "endogenous and exogenous infection",
            "air and contact infection",
            "implantation and contact infection"
        ]
    },
    {
        "numb": 22,
        "question": "J. Lister used as an antiseptic a solution of:",
        "answer": "carboxylic acid",
        "options": [
            "boric acid",
            "carboxylic acid",
            "acetic acid",
            "salicylic acid",
            "formic acid"
        ]
    },
    {
        "numb": 23,
        "question": "One of the following measures can be attributed to mechanical antiseptics:",
        "answer": "performing surgical wound treatment",
        "options": [
            "draining the wound with a two-light tube",
            "vacuuming the wound",
            "performing surgical wound treatment",
            "using ultrasonic cavitation",
            "washing the wound with a solution of hydrogen peroxide"
        ]
    },
    {
        "numb": 24,
        "question": "The requirements for chemical antiseptics do NOT include:",
        "answer": "selectivity of action on microorganisms",
        "options": [
            "maximum efficiency in minimum concentration",
            "selectivity of action on microorganisms",
            "no harmful effects on tissues",
            "no mutagenic effect",
            "the absence of the affect of inactivation by body tissues"
        ]
    },
    {
        "numb": 25,
        "question": "Dry-burning sterilization is intended for:",
        "answer": "all metal tools",
        "options": [
            "suture materila",
            "cotton pads",
            "optic material",
            "all metal tools",
            "dressing material"
        ]
    },
    {
        "numb": 26,
        "question": "What types of external influences is the HIV virus resistant to?",
        "answer": "ultraviolet irradiation",
        "options": [
            "high temperatures",
            "disinfectants",
            "low temperatures",
            "chemical solutions",
            "ultraviolet irradiation"
        ]
    },
    {
        "numb": 27,
        "question": "To control the temperature in air sterilizer is used:",
        "answer": "saccharose",
        "options": [
            "nicotinamide",
            "salicylic acid",
            "saccharose",
            "succinic acid",
            "benzoic acid"
        ]
    },
    {
        "numb": 28,
        "question": "Violation of the asepsis during injection can lead to:",
        "answer": "abscess",
        "options": [
            "nothing",
            "allergic reaction",
            "lipodystrophy",
            "abscess",
            "air embolism"
        ]
    },
    {
        "numb": 29,
        "question": "The current cleaning in the operating room is carried out:",
        "answer": "during thw hole working day",
        "options": [
            "at the end of the working day",
            "during thw hole working day",
            "before the operation",
            "twice a day",
            "once a day"
        ]
    },
    {
        "numb": 30,
        "question": "The amount of bleach for the preparation of a 10% solution:",
        "answer": "1 kg of bleach per 9 liters of water",
        "options": [
            "100 g of bleach per 10 liters of water",
            "1 kg of bleach per 5 liters of water",
            "100 g of bleach per 9.9 liters of water",
            "100 g of bleach per 5 liters of water",
            "1 kg of bleach per 9 liters of water"
        ]
    },
    {
        "numb": 31,
        "question": "A single-use system after infusion therapy is necessary to:",
        "answer": "cut, soak in a desalination solution",
        "options": [
            "cut, soak in a desalination solution",
            "hand over to the head nurse",
            "throw it away immediately",
            "throw to waste basket",
            "rinse with running water"
        ]
    },
    {
        "numb": 32,
        "question": "Skin treatment in case of contact with HIV-infected material is carried out:",
        "answer": "70 degrees of alcohol",
        "options": [
            "6% hydrogen peroxide solution",
            "70 degrees of alcohol",
            "betadin solution",
            "96 degrees of alcohol",
            "3% hydrogen peroxide solution"
        ]
    },
    {
        "numb": 33,
        "question": "Which one of the following is a soft bandage?",
        "answer": "Kerchief bandage",
        "options": [
            "Kramer's tire",
            "Illizarov's apparatus",
            "Kerchief bandage",
            "plaster cast",
            ""
        ]
    },
    {
        "numb": 34,
        "question": "One of the rules for applying a bandage to a limb is:",
        "answer": "to apply a bandage from the periphery to the trunk",
        "options": [
            "to apply a bandage from the proximal to the peripheral",
            "to apply a bandage from the periphery to the trunk",
            "to apply a bandage to clothing",
            "to fix a bandage in the wound area",
            "to apply a bandage to an unbent limb"
        ]
    },
    {
        "numb": 35,
        "question": "The most complete definition of the term \"desmurgy/bandage\" is:",
        "answer": "a complex of long-term effects on the pathological focus",
        "options": [
            "a set of tools used to secure the dressing",
            "a set of tools used to create pressure on a part of the body in order to stop venous bleeding",
            "a complex of long-term effects on the pathological focus",
            "a set of tools used to ensure long-term",
            "a set of tools used to keep the damaged part of the body (most often limbs) in the required position"
        ]
    },
    {
        "numb": 36,
        "question": "Which bandage is advisable to impose to fix the dressing material in the nasal area?",
        "answer": "sling bandage",
        "options": [
            "8-shaped bandage",
            "sling bandage",
            "circular bandage",
            "\"cap\" bandage",
            "T-shaped bandage"
        ]
    },
    {
        "numb": 37,
        "question": "Any bandage begins with application of:",
        "answer": "circular bandage",
        "options": [
            "spiral bandage",
            "8-shaped bandage",
            "creeping bandage",
            "cruciform bandage",
            "circular bandage"
        ]
    },
    {
        "numb": 38,
        "question": "When applying a spiral bandage:",
        "answer": "each subsequent round overlaps the previous one by 2/3",
        "options": [
            "the bandage rounds completely overlap each other",
            "the bandage rounds overlap",
            "do not twist the bandage",
            "the bandage rounds do not touch each other",
            "each subsequent round overlaps the previous one by 2/3"
        ]
    },
    {
        "numb": 39,
        "question": "It is advisable to apply a bandage to the knee joint:",
        "answer": "turtle",
        "options": [
            "turtle",
            "spiral",
            "returning",
            "spike",
            "creeping"
        ]
    },
    {
        "numb": 40,
        "question": "If the bones of the shin are fractured, the tire should be the length of the fingers:",
        "answer": "to the upper third of the thigh",
        "options": [
            "to the lumbar region",
            "to the knee joint",
            "to the scapula",
            "to the upper third of the thigh",
            "to the middle third of the shin"
        ]
    },
    {
        "numb": 41,
        "question": "If the bones of the forearm are fractured, the tire should be the length of the fingers:",
        "answer": "up to the upper third of the shoulder",
        "options": [
            "up to the acromion",
            "up to the upper third of the forearm",
            "up to the upper third of the shoulder",
            "up to the elbow joint",
            "all answers are wrong"
        ]
    },
    {
        "numb": 42,
        "question": "In case of wounds to the scalp, it is better to use:",
        "answer": "\"cap\"",
        "options": [
            "\"bridle\"",
            "sling-shaped",
            "circular",
            "\"cap\"",
            "cruciform bandage"
        ]
    },
    {
        "numb": 43,
        "question": "In case of damage to the elbow joint, a bandage is applied:",
        "answer": "turtle-shaped",
        "options": [
            "cruciform",
            "spiral",
            "returning",
            "turtle-shaped",
            "spike-shaped"
        ]
    },
    {
        "numb": 44,
        "question": "In case of a fracture of the collarbone, you should apply:",
        "answer": "a Dezo bandage",
        "options": [
            "a cruciform bandage on the chest",
            "a spiral bandage on the chest",
            "a Dezo bandage",
            "a spike-shaped bandage on the shoulder joint area",
            "a Trench collar"
        ]
    },
    {
        "numb": 45,
        "question": "Bleeding, in which blood accumulates in the body cavity, is called:",
        "answer": "internal",
        "options": [
            "local",
            "external",
            "internal",
            "venous",
            "abdominal"
        ]
    },
    {
        "numb": 46,
        "question": "Give the most complete correct answer: BLEEDING is an outporing of blood to:",
        "answer": "into the tissues, body cavities or the external environment",
        "options": [
            "into the xternal environment and body cavities",
            "in the body tissue",
            "in the body cavity",
            "into the tissues, body cavities or the external environment",
            "the external environment"
        ]
    },
    {
        "numb": 47,
        "question": "Give the most complete correct answer: THE DANGER OF BLEEDING LIES IN THE DEVELOPMENT OF:",
        "answer": "shock, collapse, anemia, compression of vital organs",
        "options": [
            "shock, collapse, tru aneurysm",
            "shock, collapse, anemia, compression of vital organs",
            "collapse, organ dysfunction, asphyxia",
            "shock, anemia, leukopenia",
            "anemia, leukocytosis, acidosis"
        ]
    },
    {
        "numb": 48,
        "question": "How is TEMPORARY hemostasis carried out?",
        "answer": "pressure bandage, tourniquit, finger pressure",
        "options": [
            "by applying a vascular suture",
            "ligation of the vessel in the wound",
            "pressure bandage, tourniquit, finger pressure",
            "diathermocoagulation",
            "prosthetics of the vessel"
        ]
    },
    {
        "numb": 49,
        "question": "What is the cause of early secondary bleeding?",
        "answer": "ligature slipping of the vessel",
        "options": [
            "ligature slipping of the vessel",
            "arrosion of the vessel",
            "senile age of patients",
            "melting of blood clots with pus",
            "release of adrenaline"
        ]
    },
    {
        "numb": 50,
        "question": "The outflow of dark blood from a purulent wound during dressing is:",
        "answer": "early secondary venous bleeding",
        "options": [
            "later secondary arterial bleeding",
            "early secondary arterial bleeding",
            "later secondary venous bleeding",
            "primary arterial bleeding",
            "early secondary venous bleeding"
        ]
    },
   ];
