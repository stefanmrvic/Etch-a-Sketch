window.addEventListener('load', () => {
    const grid = document.querySelector('.grid');
    
    let gridSize = document.querySelector('#slider');
    let sliderLabel = document.querySelectorAll('.button__slider--value');

    drawGrid();

    gridSize.addEventListener('mousedown', () => {
        gridSize.addEventListener('mousemove', setGridAndLabel);
    })

    gridSize.addEventListener('change', setGridAndLabel);

    function setGridAndLabel() {
        gridSize = document.querySelector('#slider');
        setSliderLabel();
        removeOldGrid();
        drawGrid();
    }

    function setSliderLabel() {
        sliderLabel[0].innerHTML = gridSize.value;
        sliderLabel[1].innerHTML = gridSize.value;
    }

    document.body.addEventListener('mouseup', () => {
        gridSize.removeEventListener('mousemove', setGridAndLabel);
    })

    function removeOldGrid() {
        const divs = document.querySelectorAll('.grid__element');

        divs.forEach(div => {
            div.remove();
        })
    }

    function drawGrid() {
        for(let i = 0; i < gridSize.value; i++) {
            for(let j = 0; j < gridSize.value; j++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('grid__element');
                grid.appendChild(newDiv);
            }
        }

        const totalGridWidth = 560;
        const gridElements = document.querySelectorAll('.grid__element');
    
        const gridElementWidth = totalGridWidth / gridSize.value;
        
        gridElements.forEach(element => {
            element.style.flexBasis = `${gridElementWidth}px`;
        })
    }

    grid.addEventListener('mousedown', (e) => {
        grid.addEventListener('mousemove', changeBackground);
        e.preventDefault();
    });

    document.body.addEventListener('mouseup', () => {
        grid.removeEventListener('mousemove', changeBackground);
    });

    function changeBackground(e) {
        e.target.style.backgroundColor = "black";
    }
})