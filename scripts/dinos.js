const dinosaurElem = document.getElementById("dinosaur")
const classificationElem = document.getElementById("classification")
const locationElem = document.getElementById("location")
const ageElem = document.getElementById("age")
const notesElem = document.getElementById("notes")

let slideIdx = 0;
let revealed = false;
let dinolist = setupSlides();

function setupSlides() {
    let slides = theropods;

    const params = (new URL(document.location)).searchParams;
    listParam = params.get("list");
    dinoParam = params.get("dino");

    switch(listParam) {
        case "theropods":
            slides = theropods;
            break;
        case "sauropods":
            slides = sauropods;
            break;
        case "ornithopods":
            slides = ornithopods;
            break;
        case "thyreophora":
            slides = thyreophora;
            break;
        case "marginocephalia":
            slides = marginocephalia;
            break;
        default:
            break;
    }

    shuffleArray(slides);

    if (listParam && dinoParam) {
        slideIdx = slides.findIndex(e => e.id === dinoParam);
        if (slideIdx === -1) slideIdx = 0;
    }

    return slides;
}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
}

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