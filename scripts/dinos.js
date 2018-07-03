const dinosaurElem = document.getElementById("dinosaur")
const classificationElem = document.getElementById("classification")
const locationElem = document.getElementById("location")
const ageElem = document.getElementById("age")
const notesElem = document.getElementById("notes")

let slideIdx = 0;
let revealed = false;
let dinolist = theropods;
dinolist.sort( () => Math.random() - 0.5)

function showSlide(index) {
    dino = dinolist[index];

    dinosaurElem.textContent = dino.dinosaur;
    classificationElem.textContent = "";
    locationElem.textContent = "";
    ageElem.textContent = "";
    while (notesElem.firstChild) {
        notesElem.firstChild.remove();
    }

    revealed = false;
}

function reveal() {
    dino = dinolist[slideIdx];
    classificationElem.textContent = dino.classification;
    locationElem.textContent = dino.location;
    ageElem.textContent = dino.age;

    if (dino.notes.length == 0) {
        notesElem.textContent = "(none)";
    }

    for (let note of dino.notes) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = note;
        notesElem.appendChild(li);
    }

    revealed = true;
}

document.getElementById("next").onclick = ev => {
    slideIdx++;
    if (slideIdx >= dinolist.length) {
        slideIdx = 0;
    }

    showSlide(slideIdx);
}

document.getElementById("previous").onclick = ev => {
    slideIdx--;
    if (slideIdx < 0) {
        slideIdx = dinolist.length - 1;
    }

    showSlide(slideIdx);
}

document.getElementById("dino-container").onclick = ev => {
    if (revealed) {
        return;
    }

    reveal();
};

showSlide(slideIdx);

console.log(dinolist);