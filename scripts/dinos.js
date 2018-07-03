const dinosaurElem = document.getElementById("dinosaur")
const classificationElem = document.getElementById("classification")
const locationElem = document.getElementById("location")
const ageElem = document.getElementById("age")

fetch('../data/dinos.json')
  .then(response => response.text())
  .then(text => load(text))

let dinos;
let theropods;
let slideIdx = -1;

function load(json) {
    dinos = JSON.parse(json);
    theropods = dinos.theropods;
    theropods.sort( () => Math.random() - 0.5)
}

function nextSlide() {
    slideIdx++;

    dino = theropods[slideIdx];

    dinosaurElem.textContent = dino.dinosaur;
    classificationElem.textContent = "";
    locationElem.textContent = "";
    ageElem.textContent = ""
}

document.getElementById("next").onclick = ev => {
    nextSlide();
}