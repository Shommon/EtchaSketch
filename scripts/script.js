const sketchContainer = document.querySelector('#sketch-container');
const resetBtn = document.querySelector('#resetbtn');
const sizeBtn = document.querySelector('#sizebtn'); 
const gridInput = document.querySelector('#sizeinput');  

//16x16 grid
let rowLength = 0;
let numRows = 0;
let isMouseDown = false;

// setGrid(16);


// const sketchCell = document.querySelectorAll('.cell')


resetBtn.addEventListener('click', resetGrid);

sizeBtn.addEventListener('click',setGrid);



// Grid Reset
function resetGrid(){
    const sketchCell = document.querySelectorAll('.cell')
    sketchCell.forEach(cell => {cell.classList.remove('colored')})
}
// Set Grid Size
function setGrid(){
    sketchContainer.innerHTML = '';
    let size = gridInput.value;
    if (size <= 100 && size >= 8){
        rowLength = size;
        numRows = size;
    }
    for (e=0; e<numRows; e++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (i=0; i<rowLength; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        sketchContainer.appendChild(row)
    };
    addListeners();
    gridInput.value = '';
    gridInput.focus()
}

function addListeners(){
    const sketchCell = document.querySelectorAll('.cell')
    sketchCell.forEach(cell => {
        cell.addEventListener('mouseover',() => {
            if (isMouseDown) {
                cell.classList.add('colored')
            }
        });
        cell.addEventListener('mousedown',() => {
            isMouseDown = true
            cell.classList.add('colored')
        });
        cell.addEventListener('mouseup', () => isMouseDown = false);
    
        cell.addEventListener('dragstart', (e) => { //Removes Drag Events
            e.preventDefault();
        })
        // console.log('attached');
    })
}