const theropods = [
    {
        "id": "Dilophosaurus",
        "dinosaur": "Dilophosaurus (two-crested lizard)",
        "classification": "Early Theorpod",
        "location": "North America",
        "age": "Early Jurassic, 193 Ma",
        "notes": [
            "First large theropod to be an apex predator"
        ]
    },
    {
        "id": "Ceratosaurus",
        "dinosaur": "Ceratosaurus (horned lizard)",
        "classification": "Ceratosaur",
        "location": "North America, Portugal",
        "age": "Late Jurassic, 150 Ma",
        "notes": [
            "Elongate nasal horn",
            "Pair of hornlets over the eyes",
            "Small row of osteoderms along its back"
        ]
    },
    {
        "id": "Carnotaurus",
        "dinosaur": "Carnotaurus (meat-eating bull)",
        "classification": "Abelisaur",
        "location": "South America",
        "age": "Late Cretaceous, 72 Ma",
        "notes": [
            "Bull-like horns",
            "Known from one well-preserved skeleton from Argentina"
        ]
    },
    {
        "id": "Megalosaurus",
        "dinosaur": "Megalosaurus (great lizard)",
        "classification": "Megalosaur",
        "location": "England",
        "age": "Middle Jurassic, 166 Ma",
        "notes": [
            "First giant reptile discovered and named"
        ]
    },
    {
        "id": "Spinosaurus",
        "dinosaur": "Spinosaurus (spine lizard)",
        "classification": "Spinosaur",
        "location": "North Africa",
        "age": "Late Cretaceous, 95 Ma",
        "notes": [
            "Largest spinosaur and theropod (up to 17m in length)",
            "Originally discovered in Egypt in the 1900s and fossil destroyed in World War 2 bombings"
        ]
    },
    {
        "id": "Baryonyx",
        "dinosaur": "Baryonyx (heavy claw)",
        "classification": "Spinosaur",
        "location": "England",
        "age": "Early Cretaceous, 130 Ma",
        "notes": [
            "First fish eating dinosaur discovered with fish scale in stomach",
            "Long straight neck",
            "Spoon shaped snout",
            "Large first finger claw"
        ]
    },
    {
        "id": "Suchomimus",
        "dinosaur": "Suchomimus (crocodile mimic)",
        "classification": "Spinosaur",
        "location": "Africa",
        "age": "Early Cretaceous, 125 Ma",
        "notes": [
            "Crocodile-like skull"
        ]
    },
    {
        "id": "Irratator",
        "dinosaur": "Irratator",
        "classification": "Spinosaur",
        "location": "South America",
        "age": "Early Cretaceous, 110 Ma",
        "notes": [
        ]
    },
    {
        "id": "Allosaurus",
        "dinosaur": "Allosaurus (different lizard)",
        "classification": "Allosaur",
        "location": "North America",
        "age": "Late Jurassic, 150 Ma",
        "notes": [
            "Apex predator preying on Stegosaurus, ornithopods and sauropods",
            "Fossils come from the Morrison Formation",
            "'Big Al' specimen is 95% complete and partly articulated"
        ]
    },
    {
        "id": "Carcharodontosaurus",
        "dinosaur": "Carcharodontosaurus (sharp tooth lizard)",
        "classification": "Allosaur",
        "location": "Northern Africa",
        "age": "Late Cretaceous, 90 Ma",
        "notes": [
            "Shark-like teeth"
        ]
    },
    {
        "id": "Giganotosaurus",
        "dinosaur": "Giganotosaurus (giant southern lizard)",
        "classification": "Allosaur",
        "location": "Argentina",
        "age": "Late Cretaceous, 87 Ma",
        "notes": [
            "Teeth for cutting flesh instead of crushing"
        ]
    },
    {
        "id": "Guanlong",
        "dinosaur": "Guanlong (crowned dragon)",
        "classification": "Tyrannosaur",
        "location": "Northern China",
        "age": "Middle Jurassic",
        "notes": [
            "Known from 2 specimens caught in a mud pit with 3 ceratosaurs",
            "Smaller and lighting than later tyrannosaurids"
        ]
    },
    {
        "id": "Dilong",
        "dinosaur": "Dilong (emperor's dragon)",
        "classification": "Tyrannosaur",
        "location": "China",
        "age": "Early Cretaceous, 126 Ma",
        "notes": [
            "Proto feathers"
        ]
    },
    {
        "id": "Yutyrannus",
        "dinosaur": "Yutyrannus (feathered tyrant)",
        "classification": "Tyrannosaur",
        "location": "China",
        "age": "Early Cretaceous",
        "notes": [
            "Largest dinosaur with evidence of feathers",
            "Specimens show proto-feathers in patches = fuzzy dinosaur"
        ]
    },
    {
        "id": "Albertosaurus",
        "dinosaur": "Albertosaurus (alberta lizard)",
        "classification": "Tyrannosaur",
        "location": "Western North America",
        "age": "Late Cretaceous, 70 Ma",
        "notes": [
            "Less robust than other tyrannosaurs",
            "Most work done by Phil Currie",
            "More agile"
        ]
    },
    {
        "id": "Gorgosaurus",
        "dinosaur": "Gorgosaurus (dreadful lizard)",
        "classification": "Tyrannosaur",
        "location": "Western North America",
        "age": "Late Cretaceous, 75 Ma",
        "notes": [
            "Less robust than other tyrannosaurs",
            "Some feathers on body"
        ]
    },
    {
        "id": "Daspletosaurus",
        "dinosaur": "Daspletosaurus (frightful lizard)",
        "classification": "Tyrannosaur",
        "location": "Western North America",
        "age": "Late Cretaceous, 75 Ma",
        "notes": [
            "Larger and more robust tyrannosaur",
            "Apex predator specialized in hunting ceratopsids and akylosaurs"
        ]
    },
    {
        "id": "Tarbosaurus",
        "dinosaur": "Tarbosaurus (alarming lizard)",
        "classification": "Tyrannosaur",
        "location": "Gobi Desert",
        "age": "Late Cretaceous 70 Ma",
        "notes": [
            "Slightly smaller, Asian cousin of T-Rex",
            "Smallest forelimbs of tyrannosaurs"
        ]
    },
    {
        "id": "Tyrannosaurus Rex",
        "dinosaur": "Tyrannosaurus Rex (tyrant lizard king)",
        "classification": "Tyrannosaur",
        "location": "North America",
        "age": "Late Cretaceous, 68 Ma",
        "notes": [
            "Largest bite force of terrestrial",
            "Adult mouth is the size of a bathtub",
            "Known from 50+ specimens",
            "'Black Beauty' Alberta specimen with black mineralization of the bones",
            "'Sue' biggest, 2nd oldest and most complete (90%) specimen. Missing her left foot, right arm, vertebrae and ribs",
            "'Trix' oldest with an estimated age of 30",
            "'B-rex' only specimen with gender (female) determined from preserved medullary tissue",
            "Fine scales on the body"
        ]
    },
    {
        "id": "Compsognathus",
        "dinosaur": "Compsognathus (elegant jaw)",
        "classification": "Compsognathid",
        "location": "Europe",
        "age": "Late Jurassic, 150 Ma",
        "notes": [
            "Ate small lizards"
        ]
    },
    {
        "id": "Sinosauropteryx",
        "dinosaur": "Sinosauropteryx (chinese lizard wing)",
        "classification": "Compsognathis",
        "location": "China (Yixing formation)",
        "age": "Early Cretaceous, 125 Ma",
        "notes": [
            "First dinosaur found with evidence of feathers",
            "Longest tail per body length",
            "First dinosaur with colourization determined through preserved melanosomes"
        ]
    },
    {
        "id": "Struthiomimus",
        "dinosaur": "Struthiomimus (ostrich mimic)",
        "classification": "Ornithomimaosaur",
        "location": "Alberta",
        "age": "Late Cretaceous, 70 Ma",
        "notes": [
            "Common in Alberta (Dinosaur Park and Drumheller)"
        ]
    },
    {
        "id": "Ornithomimus",
        "dinosaur": "Ornithomimus (bird mimic)",
        "classification": "Ornithomimosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
            "Most common small dinosaur found",
            "First evidence of feathered dinosaur in North America, discovered by François Therrien"
        ]
    },
    {
        "id": "Gallimimus",
        "dinosaur": "Gallimimus (chicken mimic)",
        "classification": "Ornithomimosaur",
        "location": "Mongolia",
        "age": "Late Cretaceous, 70 Ma",
        "notes": [
            "Largest ornithomimosaur",
            "Name referes to similarities in its neck vertebrae with chicken"
        ]
    },
    {
        "id": "Anzu",
        "dinosaur": "Anzu",
        "classification": "Oviraptorosaur",
        "location": "North America",
        "age": "Late Cretaceous, 66 Ma",
        "notes": [
            "Nicknamed 'Chicken from hell', from specimens found in the Hell Creek formation",
            "Crest on its head"
        ]
    },
    {
        "id": "Caudipteryx",
        "dinosaur": "Caudipteryx (tail feather)",
        "classification": "Oviraptorosaur",
        "location": "China (Yixian formation)",
        "age": "Early Cretaceous, 125 Ma",
        "notes": [
            "Feathered",
            "Herbivore or omnivore, gastroliths found in specimen"
        ]
    },
    {
        "id": "Citipati",
        "dinosaur": "Citipati (funeral pyre lord)",
        "classification": "Oviraptorosaur",
        "location": "Gobi Desert",
        "age": "Late Cretaceous, 80 Ma",
        "notes": [
            "Emu sized",
            "'Big Momma' specimen found in brooding position"
        ]
    },
    {
        "id": "Macroelongatoolithus",
        "dinosaur": "Macroelongatoolithus",
        "classification": "Oviraptorosaur",
        "location": "North America, Asia",
        "age": "",
        "notes": [
            "Oogenus"
        ]
    },
    {
        "id": "Beibeilong Sinesis",
        "dinosaur": "Beibeilong Sinesis (baby dragon from china)",
        "classification": "Oviraptorosaur",
        "location": "China",
        "age": "Late Cretaceous",
        "notes": [
            "Giant ovirptorosaur discovered from 'Baby Louie' embryo"
        ]
    },
    {
        "id": "Gigatoraptor",
        "dinosaur": "Gigatoraptor",
        "classification": "Oviraptorosaur",
        "location": "Mongolia",
        "age": "Late Cretacous, 85 Ma",
        "notes": [
            "Largest oviraptorosaur",
            "Known from a partial specimen",
            "Toothless"
        ]
    },
    {
        "id": "Microraptor",
        "dinosaur": "Microraptor (small thief)",
        "classification": "Dromaeosaur",
        "location": "China",
        "age": "Early Cretaceous, 120 Ma",
        "notes": [
            "4-winged, efficient glider",
            "Melanosomes indicate iridescent black colouration",
            "First discovered by Xu Xing"
        ]
    },
    {
        "id": "Velociraptor",
        "dinosaur": "Velociraptor (swift plunderer)",
        "classification": "Dromaeosaur",
        "location": "Mongolia",
        "age": "Late Cretaceous, 75 Ma",
        "notes": [
            "Originally had its sickle claw misidentified as a hand claw",
            "Quill knobs along its ulna",
            "'Fighting Dinosaurs' with a protoceratops"
        ]
    },
    {
        "id": "Deinonychus",
        "dinosaur": "Deinonychus (terrible claw)",
        "classification": "Dromaeosaur",
        "location": "North America",
        "age": "Early Cretaceous, 115 Ma",
        "notes": [
            "First discovered in Cloverly Formation by John Ostrom of a pack of 4 surrounding a hadrosaur",
            "Started the Dinosaur Renaissance after being described as extremely agile"
        ]
    },
    {
        "id": "Beipiaosaurus",
        "dinosaur": "Beipiaosaurus (Beipiao lizard)",
        "classification": "Therizinosaur",
        "location": "China (Yixian formation)",
        "age": "Early Cretaceous, 125 Ma",
        "notes": [
            "Feather coat with 2 layers: a cover of downy feathers and a long shaggy coat"
        ]
    },
    {
        "id": "Nothronychus",
        "dinosaur": "Nothronychus (sloth claw)",
        "classification": "Therizinosaur",
        "location": "North America",
        "age": "Late Cretaceous, 92 Ma",
        "notes": [
        ]
    },
    {
        "id": "Therizinosaurus",
        "dinosaur": "Therizinosaurus",
        "classification": "Therizinosaur",
        "location": "Mongolia",
        "age": "Late Cretaceous, 70 Ma",
        "notes": [
            "Largest therizinosaur",
            "Curved claws almost 1 metre in length",
            "May have used claws to hook branches"
        ]
    },
    {
        "id": "Mei long",
        "dinosaur": "Mei long (sleeping dragon)",
        "classification": "Troodontid",
        "location": "China",
        "age": "Early Cretaceous, 125 Ma",
        "notes": [
            "Specimen found in roosting positions with head tucked under its wings"
        ]
    },
    {
        "id": "Troodon",
        "dinosaur": "Troodon (wounding tooth)",
        "classification": "Troodontid",
        "location": "North America",
        "age": "Late Cretaceous, 77 Ma",
        "notes": [
            "Long serrated teeth",
            "Laid clutches with 16 to 24 eggs",
            "Alaskan troodons were larger"
        ]
    },
    {
        "id": "Arcaeopteryx",
        "dinosaur": "Arcaeopteryx (ancient wing)",
        "classification": "Avialae",
        "location": "Germany",
        "age": "Late Jurassic, 150 Ma",
        "notes": [
            "'Berlin Specimen' the most complete",
            "Transitional fossil between non-avian dinosaurs and birds",
            "Fused fingers like modern birds",
            "Backwards directed pubis and stiffened tail like paraves"
        ]
    },
    {
        "id": "Confuciusornis",
        "dinosaur": "Confuciusornis ",
        "classification": "Avialae",
        "location": "China (yixian formation)",
        "age": "Early Cretaceous, 125 Ma",
        "notes": [
            "Link between archaic birds and modern birds",
            "First known bird with a pygostyle",
            "Small about the size of a pigeon"
        ]
    }
]

const sauropods = [
    {
        "id": "Diplodocus",
        "dinosaur": "Diplodocus (double beam)",
        "classification": "Diplodocoids",
        "location": "North America (Morrison Formation)",
        "age": "Late Jurassic",
        "notes": [
            "Long whip like tail"
        ]
    },
    {
        "id": "Apatosaurus",
        "dinosaur": "Apatosaurus (deceptive lizard)",
        "classification": "Diplodocoids",
        "location": "North America (Morrison Formation)",
        "age": "Late Jurassic",
        "notes": [
            "More robust diplodocoid"
        ]
    },
    {
        "id": "Amargasaurus",
        "dinosaur": "Amargasaurus (la amarga lizard)",
        "classification": "Diplodocoids",
        "location": "Argentina",
        "age": "Early Cretaceous",
        "notes": [
            "Small sauropod",
            "Two rows of spines"
        ]
    },
    {
        "id": "Nigersaurus",
        "dinosaur": "Nigersaurus (niger lizard)",
        "classification": "Diplodocoids",
        "location": "Africa",
        "age": "Early Cretaceous",
        "notes": [
            "Flat, wide mouth",
            "Dental battery",
            "Upright skull, low to the ground"
        ]
    },
    {
        "id": "Camarasaurus",
        "dinosaur": "Camarasaurus (chambered lizard)",
        "classification": "Macronarians",
        "location": "North America",
        "age": "Late Jurassic",
        "notes": [
            "Blunt face",
            "Spatulate teeth",
            "Most abundent, sauropod of its time"
        ]
    },
    {
        "id": "Brachiosaurus",
        "dinosaur": "Brachiosaurus (armed lizard)",
        "classification": "Brachiosaurs",
        "location": "North America (Morrison Formation)",
        "age": "Late Jurassic",
        "notes": [
            "Longer forelimbs than rear limbs",
            "Short tail relative to neck"
        ]
    },
    {
        "id": "Giraffatitan",
        "dinosaur": "Giraffatitan (giant giraffe)",
        "classification": "Brachiosaurs",
        "location": "Africa",
        "age": "Late Jurassic",
        "notes": [
            "Longer forelimbs than rear limbs",
            "Short tail relative to neck"
        ]
    },
    {
        "id": "Argentinosaurus",
        "dinosaur": "Argentinosaurus (argentine lizard)",
        "classification": "Titanosaurs",
        "location": "Argentina",
        "age": "Late Cretaceous",
        "notes": [
            "One of the largest land animals of all time",
            "No manual digits"
        ]
    },
    {
        "id": "Patagotitan",
        "dinosaur": "Patagotitan",
        "classification": "Titanosaurs",
        "location": "Argentina",
        "age": "Late Cretaceous",
        "notes": [
            "Largest land animal"
        ]
    },
]

const ornithopods = [
    {
        "id": "Tenontosaurus",
        "dinosaur": "Tenontosaurus",
        "classification": "Iguanodontian",
        "location": "North America",
        "age": "Early Cretaceous",
        "notes": [
            "Subadult specimens found in association with Deinonychus suggesting a predator-prey relationship"
        ]
    },
    {
        "id": "Iguanodon",
        "dinosaur": "Iguanodon (iguana tooth)",
        "classification": "Iguanodontian",
        "location": "Europe",
        "age": "Early Cretaceous",
        "notes": [
            "One of the first dinosaurs described scientifically",
            "Conical thumb spikes for manual digit I",
            "Prehensile manual digit V",
            "Hooves for manual digits II, III, IV"
        ]
    },
    {
        "id": "Edmontosaurus",
        "dinosaur": "Edmontosaurus (Edmonton lizard)",
        "classification": "Saurlophine",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
            "Evidence from bonebeds suggest they lived in herds and were migratory",
            "Dakota dinosaur mummy"
        ]
    },
    {
        "id": "Lambeosaurus",
        "dinosaur": "Lambeosaurus (Lambe's lizard)",
        "classification": "Lambeosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
        ]
    },
    {
        "id": "Corythosaurus",
        "dinosaur": "Corythosaurus (helmet lizard)",
        "classification": "Lambeosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
        ]
    },
    {
        "id": "Corythosaurus",
        "dinosaur": "Corythosaurus (helmet lizard)",
        "classification": "Lambeosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
            "Large crest"
        ]
    },
    {
        "id": "Parasaurolophus",
        "dinosaur": "Parasaurolophus (near crested lizard)",
        "classification": "Lambeosaur",
        "location": "North America",
        "age": "Late Cretaceous, 75 ma",
        "notes": [
        ]
    },
]

const thyreophora = [
    {
        "id": "Scutellosaurus",
        "dinosaur": "Scutellosaurus (little shielded lizard)",
        "classification": "Thyreophora",
        "location": "North america",
        "age": "Early Jurassic",
        "notes": [
            "Has small armoured scutes",
            "Bipedal"
        ]
    },
    {
        "id": "Scelidosaurus",
        "dinosaur": "Scelidosaurus (limb lizard)",
        "classification": "Thyreophora",
        "location": "England",
        "age": "Early Jurassic",
        "notes": [
            "Hundreds of scutes",
            "Quadrupedal"
        ]
    },
    {
        "id": "Kentrosaurus",
        "dinosaur": "Kentrosaurus",
        "classification": "Stegosaur",
        "location": "Tanzania",
        "age": "Late Jurassic",
        "notes": [
            "Shoulder spikes"
        ]
    },
    {
        "id": "Stegosaurus",
        "dinosaur": "Stegosaurus (roof lizard)",
        "classification": "Stegosaur",
        "location": "North America",
        "age": "Late Jurassic",
        "notes": [
            "Two rows of offset plates",
            "Thagomizer",
            "Allosaur wound found that fits the thagomizer spike",
            "Sophie the most complete specimen (80%)"
        ]
    },
    {
        "id": "Edmontia",
        "dinosaur": "Edmontia",
        "classification": "Nodosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
            "Known from 2 species"
        ]
    },
    {
        "id": "Euoplocephalus",
        "dinosaur": "Euoplocephalus",
        "classification": "Ankylosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
            "Lived alongside Edmontia"
        ]
    },
    {
        "id": "Ankylosaurus",
        "dinosaur": "Ankylosaurus (fused lizard)",
        "classification": "Ankylosaur",
        "location": "North America (Hell creek formation)",
        "age": "Late Cretaceous",
        "notes": [
            "Largest known ankylosaur"
        ]
    },
    {
        "id": "Borealopelta markmitchelli",
        "dinosaur": "Borealopelta markmitchelli",
        "classification": "Nodosaur",
        "location": "North America",
        "age": "Early Cretaceous",
        "notes": [
            "The Suncor Nodosaur"
        ]
    },
]

const marginocephalia = [
    {
        "id": "Psittacosaurus",
        "dinosaur": "Psittacosaurus (parrot lizard)",
        "classification": "Ceratopsian",
        "location": "China",
        "age": "Early Cretaceous",
        "notes": [
            "Primitive ceratopsian",
            "Abundent specimens",
            "Small frill",
            "Bristles at end of tail",
            "Ontogeny shows likely to start quadrupedal and switch to bipedal later in life"
        ]
    },
    {
        "id": "Protoceratops",
        "dinosaur": "Protoceratops (first horn face)",
        "classification": "Neoceratopsian",
        "location": "Mongolia",
        "age": "Late Cretaceous",
        "notes": [
            "Abundent specimens show sexual dimorphism",
            "Males had larger frill and a bump on the snout"
        ]
    },
    {
        "id": "Protoceratops",
        "dinosaur": "Protoceratops (first horn face)",
        "classification": "Neoceratopsian",
        "location": "Mongolia",
        "age": "Late Cretaceous",
        "notes": [
            "Abundent specimens show sexual dimorphism",
            "Males had larger frill and a bump on the snout"
        ]
    },
    {
        "id": "Centrosaurus",
        "dinosaur": "Centrosaurus",
        "classification": "Pachyrhinosaur",
        "location": "",
        "age": "",
        "notes": [
            "Frill with 4 horns, 2 up, 2 down",
            "Straight nasal horn"
        ]
    },
    {
        "id": "Pachyrhinosaurus",
        "dinosaur": "Pachyrhinosaurus",
        "classification": "Pachyrhinosaur",
        "location": "",
        "age": "",
        "notes": [
            "No nasal horn",
            "Prominent pair of horns on frill",
        ]
    },
    {
        "id": "Styracosaurus",
        "dinosaur": "Styracosaurus",
        "classification": "Pachyrhinosaur",
        "location": "",
        "age": "",
        "notes": [
            "Straight nasal horn",
            "Pair of 4 large horns on frill",
        ]
    },
    {
        "id": "Triceratops",
        "dinosaur": "Triceratops (three horned face)",
        "classification": "Ceratopsine",
        "location": "North America (Hell creek formation)",
        "age": "Late Cretaceous",
        "notes": [
            "Most abundent fossil in hell creek formation",
            "No horns on frill",
            "Large eye horns and small nasal horn",
            "Ontogeny suggests horns start curved backwards but face forward as they grow"
        ]
    },
    {
        "id": "Torosaurus",
        "dinosaur": "Torosaurus (perforated lizard)",
        "classification": "Ceratopsine",
        "location": "North America (Hell creek formation)",
        "age": "Late Cretaceous",
        "notes": [
            "May have been mature form of triceratops",
            "Two holes in the frill"
        ]
    },
    {
        "id": "Kosmoceratops",
        "dinosaur": "Kosmoceratops",
        "classification": "Ceratopsine",
        "location": "",
        "age": "",
        "notes": [
            "Small downward facing horns on frill",
            "Two eye horns, no nasal horn",
        ]
    },
    {
        "id": "Pachycephalosaurus",
        "dinosaur": "Pachycephalosaurus (thick headed lizard)",
        "classification": "Pachycephalosaur",
        "location": "North America",
        "age": "Late Cretaceous",
        "notes": [
            "Likely used dome head to headbutt flanks not head to head",
            "Studies suggest 'Dracorex Hogwartsia' and 'Stygimoloch' are ontogomorphs",
        ]
    },
]