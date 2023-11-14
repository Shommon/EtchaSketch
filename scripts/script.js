const sketchContainer = document.querySelector('#sketch-container');
const resetBtn = document.querySelector('#resetbtn')
    
//16x16 grid
let rowLength = 20;
let numRows = 20;
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


const sketchCell = document.querySelectorAll('.cell')
let isMouseDown = false;
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

resetBtn.addEventListener('click', resetGrid)

function resetGrid(){
    sketchCell.forEach(cell => {cell.classList.remove('colored')})
}
    
    



