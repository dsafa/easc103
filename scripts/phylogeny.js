let nodes = new vis.DataSet()
let edges = new vis.DataSet()
let levels = [];

for (let x of theropodPhylogeny) {
    nodes.add({
        id: x.id,
        label: x.clade,
        features: x.features,
        dinosaurs: x.dinosaurs
    });

    if (x.parent) {
        edges.add({
            from: x.parent,
            to: x.id,
        })
    }

    levels.push(x.parent);
}

let container = document.getElementById('container');

let data = {
    nodes: nodes,
    edges: edges
};

let physics = {
    enabled: false
}

let interaction = {
    dragNodes: false,
    hover: true
}

let layout = {
    randomSeed: 1,
    hierarchical: {
        enabled: true,
        levelSeparation: 50,
        nodeSpacing: 300,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: false,
        direction: 'DU',
        sortMethod: 'directed'
      }
}

let nodeoptions = {
    size: 5,
    color: {
        border: "black",
        background: "black",
    },
    shape: "dot",
    font: {
        size: 20,
        vadjust: -60
    }
}

let options = {
    autoResize: true,
    physics: physics,
    interaction: interaction,
    nodes: nodeoptions,
    layout: layout
};

let network = new vis.Network(container, data, options);

network.on("click", e => {
    if (e.nodes.length === 0) {
        return;
    }

    node = nodes.get(e.nodes[0]);

    clade.textContent = node.label;

    if (node.features) {
        featuresElem.textContent = "Features";
        writeList(featuresListElem, node.features);
    } else {
        featuresElem.textContent = "";
        writeList(featuresListElem, [])
    }

    if (node.dinosaurs) {
        dinosaurElem.textContent = "Dinosaurs";
        writeList(dinosaurListElem, node.dinosaurs);
    } else {
        dinosaurElem.textContent = "";
        writeList(dinosaurListElem, []);
    }
});

const featuresElem = document.getElementById("features");
const featuresListElem = document.getElementById("features-list");
const dinosaurElem = document.getElementById("dinosaurs");
const dinosaurListElem = document.getElementById("dinosaurs-list");
const cladeElem = document.getElementById("clade");

function writeList(elem, items) {
    console.log(items)
    while (elem.firstChild) {
        elem.firstChild.remove();
    }

    for (let item of items) {
        var li = document.createElement("li");
        li.classList.add("h3");
        li.textContent = item;
        elem.appendChild(li);
    }
}


