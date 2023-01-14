// grab the body element to append to it
let body = document.querySelector('body');

// create a container to set fixed width for page content
let pageContainer = document.createElement('div');
pageContainer.classList.add('page-container');
body.appendChild(pageContainer);

// create a container for my doodle app
let appContainer = document.createElement('div');
appContainer.classList.add('app-container');
pageContainer.appendChild(appContainer);

// add a header for app title
let appHeader = document.createElement('h1');
appHeader.classList.add('app-header');
appHeader.textContent = "Doodle Game";
appContainer.appendChild(appHeader);

// add doodle grid div
let doodleGrid = document.createElement('div');
doodleGrid.classList.add('doodle-grid');
appContainer.appendChild(doodleGrid);

// function to change grid div background color
function changeBackgroundColor(e) {
    e.target.classList.add('hovered-square');
}

// function to create a square for the grid
function makeGridSquare(squareID, gridSize = 4) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('square-div');
    gridSquare.id = `gridSquare${squareID + 1}`;
    gridSquare.style.height = `${(960 / gridSize)}px`;
    gridSquare.style.width = `${(960 / gridSize)}px`;
    gridSquare.addEventListener('mouseover', changeBackgroundColor);
    doodleGrid.appendChild(gridSquare);
}

// add a button to the app ( will use to reset grid size to user selection )
let resetButton = document.createElement('button');
resetButton.textContent = "Reset and Resize";
resetButton.classList.add('reset-button');
resetButton.addEventListener('click', resetGrid);
appContainer.appendChild(resetButton);

// function to reset grid based on user input
function resetGrid() {
    doodleGrid.innerHTML = '';
    let userGridSize = parseInt(prompt("What size grid would you like from 1x1 to 100x100?"));
    if ((userGridSize < 1) || (userGridSize > 100)) {
        resetGrid();
    } else {
        for (i = 0; i < (userGridSize * userGridSize); i++) {
            makeGridSquare(i, userGridSize);
        }
    }
}


// create my starting 16 divs in the grid
for (i = 0; i < 16; i++) {
    makeGridSquare(i);
}