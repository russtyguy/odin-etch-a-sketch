const squareGrid = document.querySelector(".container");

function makeSquaresGrid(num) {
  for (let i = 0; i <= num; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    squareGrid.appendChild(square);
  }
}

makeSquaresGrid(255);
