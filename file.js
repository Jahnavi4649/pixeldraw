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
            // gridBox.addEventListener('click', draw);
            drawingArea.appendChild(gridBox);
    }
}

const colorPicker = document.getElementById("color-selected");
let colorSelected = colorPicker.value;
colorPicker.addEventListener('input', setColor);

function setColor(e){
    colorSelected = e.target.value;
}

let isMouseDown = false;
const drawingArea = document.getElementById("drawing-area");
drawingArea.addEventListener('mousedown', function(e){
    isMouseDown = true;
    e.target.style.backgroundColor = colorSelected;
})
drawingArea.addEventListener('mousemove', function(e){
    if(isMouseDown == true){
        e.target.style.backgroundColor = colorSelected;
    }
})
window.addEventListener('mouseup', function () {
    isMouseDown = false; 
  });

document.getElementById("clear-button").addEventListener("click", clearDrawingArea);
function clearDrawingArea(){
    const boxes = drawingArea.querySelectorAll(".box-style");
    boxes.forEach(box => box.style.backgroundColor = "#ffffff");
}