function getDynamicGrid(size) {
const div = document.querySelector(".container")

div.innerHTML = ""

for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("containerElement");
    div.appendChild(grid)

    let gridSize = 960 / size

    grid.style.width = `${gridSize}px`
    grid.style.height = `${gridSize}px`
}

}
getDynamicGrid(16)

function getPrompt() {
    const aNumber = Number(window.prompt("Type a number", ""));

    if(isNaN(aNumber)) {
        alert("PLEASE ENTER A NUMBER")
    } else if(aNumber > 100) {
        alert("YOU CAN ENTER A MAX VALUE OF 100")
    }
    getDynamicGrid(aNumber)
}
