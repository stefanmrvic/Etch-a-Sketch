window.addEventListener('load', () => {
    const grid = document.querySelector('.grid');
    
    let slider = document.querySelector('#slider');
    let gridSize = slider.value;
    let sliderLabel = document.querySelectorAll('.button__slider--value');
    let currBtn = 'color-mode';

    drawGrid();

    slider.addEventListener('input', setGridAndLabel);

    function setGridAndLabel() {
        gridSize = slider.value;
        setSliderLabel();
        removeOldGrid();
        drawGrid();
    }

    function setSliderLabel() {
        sliderLabel[0].innerHTML = gridSize;
        sliderLabel[1].innerHTML = gridSize;
    }

    function removeOldGrid() {
        const divs = document.querySelectorAll('.grid__element');

        divs.forEach(div => {
            div.remove();
        })
    }

    function drawGrid() {
        for(let i = 0; i < gridSize; i++) {
            for(let j = 0; j < gridSize; j++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('grid__element');
                grid.appendChild(newDiv);
            }
        }

        const totalGridWidth = 560;
        const gridElements = document.querySelectorAll('.grid__element');
    
        const gridElementWidth = totalGridWidth / gridSize;
        
        gridElements.forEach(element => {
            element.style.flexBasis = `${gridElementWidth}px`;
        })
    }

    grid.addEventListener('mousedown', (e) => {
        grid.addEventListener('mouseover', changeBackground);
        e.preventDefault();
    });

    document.body.addEventListener('mouseup', () => {
        grid.removeEventListener('mouseover', changeBackground);
        grid.removeEventListener('click', changeBackground);
    });

    function changeBackground(e) {
        if (currBtn === 'eraser') {
            e.target.style.backgroundColor = "white";
        } else if (currBtn === 'rainbow'){
            e.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        } else {
            e.target.style.backgroundColor = "black";
        }
    }

    const clearBtn = document.querySelector('.button__clear');
    const eraserBtn = document.querySelector('.button__eraser');
    const rainbowBtn = document.querySelector('.button__rainbow');
    const colorModeBtn = document.querySelector('.button__color-mode');

    clearBtn.addEventListener('click', setBackgroundColorWhite);

    function setBackgroundColorWhite() {
        const gridElements = document.querySelectorAll('.grid__element');
        gridElements.forEach(element => {
            element.style.backgroundColor = 'white';
        })
    }

    eraserBtn.addEventListener('click', () => {
        currBtn = 'eraser';
    });     
    
    colorModeBtn.addEventListener('click', () => {
        currBtn = 'color-mode';
    });     
    
    rainbowBtn.addEventListener('click', () => {
        currBtn = 'rainbow';
    }); 

    function random() {
        return Math.floor(Math.random() * 255);
    }
})