function getDynamicGrid() {
const div = document.querySelector(".container")

const grid = document.createElement("div");

grid.classList.add("containerElement");

div.appendChild(grid)
}

for (let i = 0; i < 16 * 16; i++) {
    getDynamicGrid()
}

function getPrompt() {
    const aNumber = Number(window.prompt("Type a number", ""));

    for (let i = 0; i < aNumber; i++) {
        getDynamicGrid()
    }

    if(isNaN(aNumber)) {
        alert("PLEASE ENTER A NUMBER")
    } else if(aNumber > 101) {
        alert("YOU CAN ENTER A MAX VALUE OF 100")
    }
}
