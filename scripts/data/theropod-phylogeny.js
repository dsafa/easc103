const theropodPhylogeny = [
    {
        "id": "Theropods",
        "clade": "Theropods",
        "parent": null,
        "features": [
            "Obligate Bipeds",
            "Have a Furcula",
            "Hollow Bones",
            "3 Functional digits and 1 offset digit",
            "Grasping hands with an offset digit I",
            "Large, curved, laterally compressed teeth"
        ],
    },
    {
        "id": "Early Theropods",
        "clade": "Early\nTheropods",
        "parent": "Theropods",
        "dinosaurs": [
            "Dilophosaurus"
        ]
    },
    {
        "id": "Neotheropods",
        "clade": "Neotheropods",
        "parent": "Theropods",
    },
    {
        "id": "Ceratosaurs / Abelisaurs",
        "clade": "Ceratosaurs/\nAbelisaurs",
        "parent": "Neotheropods",
        "features": [
            "Robust skull with ornamentation",
            "Shortening of arms"
        ],
        "dinosaurs": [
            "Ceratosaurus",
            "Carnotaurus"
        ]
    },
    {
        "id": "Tetanurans",
        "clade": "Tetanurans",
        "parent": "Neotheropods",
        "features": [
            "Air sac lung system"
        ]
    },
    {
        "id": "Megalosaurs / Spinosaurs",
        "clade": "Megalosaurs/\nSpinosaurs",
        "parent": "Tetanurans",
        "features": [
            "Megalosaurs: Long skulls and snouts",
            "Spinosaurs: Crocodile like skull and conical teeth",
        ],
        "dinosaurs": [
            "Megalosaurus",
            "Spinosaurus",
            "Baryonyx",
            "Suchomimus",
            "Irritator"
        ]
    },
    {
        "id": "Avetheropods",
        "clade": "Avetheropods",
        "parent": "Tetanurans",
    },
    {
        "id": "Allosaurs",
        "clade": "Allosaurs",
        "parent": "Avetheropods",
        "dinosaurs": [
            "Allosaurus",
            "Carcharodontosaurus",
            "Giganotosaurus"
        ]
    },
    {
        "id": "Coelurosaurs",
        "clade": "Coelurosaurs",
        "parent": "Avetheropods",
        "features": [
            "Longer sacrum",
            "Tail stiffened towards to tip",
            "Larger brain",
            "Tibia longer than femur",
            "Bowed ulna",
            "Feather integument"
        ]
    },
    {
        "id": "Tyrannosaurs",
        "clade": "Tyrannosaurs",
        "parent": "Coelurosaurs",
        "dinosaurs": [
            "Guanlong",
            "Dilong",
            "Yutyrannus",
            "Tarbosaurus",
            "Albertosaurus",
            "Gorgosaurus",
            "Daspletosaurus",
            "Tyrannosaurus Rex"
        ]
    },
    {
        "id": "1",
        "clade": "",
        "parent": "Coelurosaurs"
    },
    {
        "id": "Compsognathids",
        "clade": "Compsognathids",
        "parent": "1",
        "dinosaurs": [
            "Compsognathus",
            "Sinosauropteryx"
        ]
    },
    {
        "id": "Maniraptoriformes",
        "clade": "Maniraptoriformes",
        "parent": "1",
        "features": [
            "Small skull relative to body size, but larger brains",
            "Increased number of small teeth, even toothless",
            "Diverse group of carnivores, omnivores and herbivores"
        ]
    },
    {
        "id": "Ornithomimosaur",
        "clade": "Ornithomimosaur",
        "parent": "Maniraptoriformes",
        "features": [
            "Longs arms",
            "Long bony tail",
            "3 Long fingers of about the same length"
        ],
        "dinosaurs": [
            "Struthiomimus",
            "Ornithomimus",
            "Gallimimus",
        ]
    },
    {
        "id": "Maniraptorans",
        "clade": "Maniraptorans",
        "parent": "Maniraptoriformes",
        "features": [
            "Most diverse group",
            "Even larger brains",
            "Bony sternum",
            "Semi-lunate bone in the wrist"
        ]
    },
    {
        "id": "Therizinosaurs",
        "clade": "Therizinosaurs",
        "parent": "Maniraptorans",
        "features": [
            "Long necks",
            "Wide torsos",
            "Enormous claws",
            "Highly derived therizinosaurs had 4 functional toes"
        ],
        "dinosaurs": [
            "Beipiaosaurus",
            "Nothronychus",
            "Therizinosaurus"
        ]
    },
    {
        "id": "2",
        "clade": "",
        "parent": "Maniraptorans"
    },
    {
        "id": "Oviraptorosaurs",
        "clade": "Oviraptorosaurs",
        "parent": "2",
        "features": [
            "Short snouts",
            "Massive beak-like mandibles",
            "Few or no teeth",
            "Short thick tail",
        ],
        "dinosaurs": [
            "Anzu",
            "Caudipteryx",
            "Oviraptorosaurus",
            "Citipati",
            "Beibeilong Sinesis",
            "Gigantoraptor"
        ]
    },
    {
        "id": "Paraves",
        "clade": "Paraves",
        "parent": "2",
        "features": [
            "Sickle claw",
            "Backward directed pubis",
            "Larger elongate skull, with small serrated teeth",
            "Stiffened tail"
        ]
    },
    {
        "id": "Dromaeosaurs",
        "clade": "Dromaeosaurs",
        "parent": "Paraves",
        "dinosaurs": [
            "Microraptor",
            "Velociraptor",
            "Deinonychus"
        ]
    },
    {
        "id": "3",
        "clade": "",
        "parent": "Paraves"
    },
    {
        "id": "Troodontids",
        "clade": "Troodontids",
        "parent": "3",
        "features": [
            "Large number of closely spaced teeth in the lower jaw",
            "Highest non-avian encephalization quotient"
        ],
        "Dinosaurs": [
            "Mei long",
            "Troodon"
        ]
    },
    {
        "id": "Avialae",
        "clade": "Avialae",
        "parent": "3",
        "dinosaurs": [
            "Archaeopteryx",
            "Confuciusornis"
        ]
    },
]