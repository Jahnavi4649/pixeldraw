const slider = document.getElementById("grid-size-value");
slider.addEventListener('input', setGridNumber);

function setGridNumber(e){
    const gridNumber = e.target.value;
    document.getElementById("grid-number").textContent = gridNumber;
}