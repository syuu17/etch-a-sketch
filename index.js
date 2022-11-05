const board = document.querySelector(".board");
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "red";
    board.insertAdjacentElement("beforeend", square);

}
// set a default grid of 16x16
// get an input for the user's preferred grid size
// use a loop to create new divs depending on the input's number
