const sketchContainer = document.querySelector('#sketch-container');
const resetBtn = document.querySelector('#resetbtn')
    
    //16x16 grid
    let rowLength = 16;
    let numRows = 16;
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
        cell.addEventListener('mouseover',sayMe);
        console.log('attached');
    })
    
    
    function sayMe(e){
        console.log(e.target);
        e.target.classList.add('colored');
    
    }


