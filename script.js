const squareGrid = document.querySelector(".container");

function makeSquares(num) {
  for (let i = 0; i <= num; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    squareGrid.appendChild(square);
  }
}

makeSquares(255);
