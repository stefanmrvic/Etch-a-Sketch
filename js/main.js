window.addEventListener('load', () => {
    const grid = document.querySelector('.grid');
    
    let slider = document.querySelector('#slider');
    let gridSize = slider.value;
    let sliderLabel = document.querySelectorAll('.button__slider--value');
    let currBtn = 'color-mode';

    drawGrid();

    slider.addEventListener('input', setSliderLabel);
    slider.addEventListener('click', setGridSize);

    function setGridSize() {
        gridSize = slider.value;
        removeOldGrid();
        drawGrid();
    }

    function setSliderLabel() {
        gridSize = slider.value;
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
            let currColor = document.querySelector('#color-picker').value;
            e.target.style.backgroundColor = `${currColor}`;
        }
    }

    const clearBtn = document.querySelector('.button__clear');
    const colorPickerBtn = document.querySelector('#color-picker');

    clearBtn.addEventListener('click', setBackgroundColorWhite);

    function setBackgroundColorWhite() {
        const gridElements = document.querySelectorAll('.grid__element');
        gridElements.forEach(element => {
            element.style.backgroundColor = 'white';
        })
    }

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        if(button.id === 'clear') {
            return;
        }

        button.addEventListener('click', () => {
            removeActiveBtnClass();

            let buttonID = button.id;
            currBtn = buttonID;
            button.classList.add('active');
        })
    })
    
    colorPickerBtn.addEventListener('click', () => {
        const colorModeBtn = document.querySelector('#color-mode');
        removeActiveBtnClass();
        colorModeBtn.classList.add('active');
        currBtn = 'color-mode';
    });   
    
    function removeActiveBtnClass() {
        buttons.forEach(button => {
            if(button.classList.contains('active')) {
                button.classList.remove('active');
            }
        })
    }
    
    function random() {
        return Math.floor(Math.random() * 255);
    }

    colorPickerBtn.addEventListener('input', () => {
        colorPickerBtn.style.backgroundColor = `${colorPickerBtn.value}`;
    })
})