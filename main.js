window.addEventListener('load', () => {
    const grid = document.querySelector('.grid');
    
    let slider = document.querySelector('#slider');
    let gridSize = slider.value;
    let sliderLabel = document.querySelectorAll('.button__slider--value');

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