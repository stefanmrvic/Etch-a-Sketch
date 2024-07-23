window.addEventListener('load', () => {
    const grid = document.querySelector('.grid');
    
    let gridSize = 6;

    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid__element');
            grid.appendChild(newDiv);
        }
    }

    const gridElements = document.querySelectorAll('.grid__element');

    gridElements.forEach(ele => {
        switch(gridSize) {
            case 6: 
            ele.classList.add('grid-1');
            ele.setAttribute("draggable", "false");
        }

        grid.addEventListener('mousedown', () => {
            ele.addEventListener('mouseover', setGridElementColor);
        });
        
        grid.addEventListener('mouseup', () => {
            ele.removeEventListener('mouseover', setGridElementColor);
        });
    })

    function setGridElementColor(e) {
        e.target.style.backgroundColor = "pink";
        e.target.preventDefault()
    }
})