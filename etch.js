
const grid = document.querySelector(".grid");
let squares = document.getElementById("squares")



for (let i = 0; i < 20; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.width = `${600 / 20}px`;
    column.style.heght = '600px';
    column.style.margin = '0.5px';
    grid.appendChild(column);
    for (let i = 0; i < 20; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // cell.style.width = `${600 / 16}px`;
        cell.style.height = `${600 / 20}px`;
        cell.style.margin = '0.5px';
        column.appendChild(cell);
    }
}


// for (let i = 0; i < squares; i++) {
//     const column = document.createElement('div');
//     column.classList.add('column');
//     column.style.width = `${600 / squares}px`;
//     column.style.heght = '600px';
//     column.style.margin = '0.5px';
//     grid.appendChild(column);
//     for (let i = 0; i < squares; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         // cell.style.width = `${600 / 16}px`;
//         cell.style.height = `${600 / squares}px`;
//         cell.style.margin = '0.5px';
//         column.appendChild(cell);
//     }
// }


// pseudocode
// for loop to create divs
// for ............. create element(cell) and add to the grid
// or maybe: create row div, append to grid.
//  append cells to the row horizontally with a for loop
// keep adding rows to the grid vertically with a for loop
// create eventlistener for when its hovered over, it will change the color of the cell





// INSTRUCTIONS:
// create 16 x 16 grid of square grids
//  create the divs using javascript
//  use Flexbox to make divs appear as a grid (DO NOT USE CSS GRID)
//  be careful with borders and margins

// set up a "hover" effect so that grid divs change color when your mouse passes over them
//  should leave a pixelated trail (like a pen)
//      can set up event listeners for either of those events as a starting point
//  ways to change color of divs: adding new class to div or changing div's background color using js

// add a button on top of screen that will send user a popup asking for number of squares per side for new grid
//  once entered, existing grid should be removed and new grid should be generated in the same total space as before
//      tip: set limit for user input to max of 100
//          you should be able to enter 64 and have a brand new 64 x 64 grid pop up without changing
//          the total amount of pixels used