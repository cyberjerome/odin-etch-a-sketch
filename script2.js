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
        let interactionCount = 0; // Track number of interactions

        item.addEventListener('mouseover', () => {
            interactionCount++;
            const currentColor = getRandomColor();

            // Apply progressive darkening effect
            const darkenPercentage = (interactionCount * 10) / 100;
            const darkenedColor = darkenColor(currentColor, darkenPercentage);

            item.style.backgroundColor = darkenedColor;
        });
    });
}

// Clear existing grid
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Generate random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Darken color by percentage
function darkenColor(color, percentage) {
    const [r, g, b] = color.match(/\d+/g);
    const newR = Math.floor(r * (1 - percentage));
    const newG = Math.floor(g * (1 - percentage));
    const newB = Math.floor(b * (1 - percentage));
    return `rgb(${newR},${newG},${newB})`;
}

// Generate initial grid
generateGrid();