createGrids(10);

const slider = document.getElementById("grid-size-value");
slider.addEventListener('input', setGridNumber);

function setGridNumber(e){
    const gridNumber = e.target.value;
    document.getElementById("grid-number").textContent = gridNumber;
    createGrids(gridNumber);
}

const drawingAreaSize = 640;

function createGrids(gridNumber){
    const drawingArea = document.getElementById("drawing-area");
    drawingArea.innerHTML = '';
    let gridBoxSize = 640/gridNumber;
    for(let i=0; i< gridNumber*gridNumber; i++){
            const gridBox = document.createElement("div");
            gridBox.style.width = gridBoxSize+'px';
            gridBox.style.height = gridBoxSize+'px';
            gridBox.classList.add("box-style");
            drawingArea.appendChild(gridBox);
    }
}