const gridContainer = document.querySelector('.grid-container');
let gridSize = 16; // Default grid size

// Function to handle popup and grid generation
function createNewGrid() {
    const newGridSize = prompt('Enter the number of squares per side (maximum 100):');
    const parsedSize = parseInt(newGridSize);

    if (isNaN(parsedSize) || parsedSize <= 0 || parsedSize > 100) {
        alert('Invalid input! Please enter a number between 1 and 100.');
        return;
    }

    gridSize = parsedSize;
    clearGrid();
    generateGrid();
}

// Generate grid items dynamically
function generateGrid() {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });
    });
}

// Clear existing grid
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Generate initial grid
generateGrid();


