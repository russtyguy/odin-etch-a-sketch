const squareGrid = document.querySelector(".container");
const btnCount = document.querySelector(".btn");

function makeSquaresGrid(count) {
  for (let i = 0; i < count * count; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.flexBasis = `${100 / count}%`;
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    squareGrid.appendChild(square);
  }
}

makeSquaresGrid(16);

function resetSquareGrid() {
  while (squareGrid.firstChild) {
    squareGrid.removeChild(squareGrid.firstChild);
  }
}

btnCount.addEventListener("click", () => {
  resetSquareGrid();
  let count = prompt("How many square do you want in a row?(max 100)");
  if (count > 100) {
    count = 0;
  }
  makeSquaresGrid(+count);
});
