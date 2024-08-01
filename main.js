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

    const totalGridWidth = 560;
    const gridElements = document.querySelectorAll('.grid__element');

    let gridElementWidth = totalGridWidth / gridSize;
    
    gridElements.forEach(element => {
        element.style.flexBasis = `${gridElementWidth}px`;
    })

    grid.addEventListener('mousedown', (e) => {
        grid.addEventListener('mousemove', changeBackground);
        e.preventDefault();
    });

    grid.addEventListener('mouseup', () => {
        grid.removeEventListener('mousemove', changeBackground);
    });

    function changeBackground(e) {
        e.target.style.backgroundColor = "pink";
    }
})