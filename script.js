const container = document.querySelector(".padContainer");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell")


let size = 16;
//rows
let etch = () => {
  
  //sizing formula ( grid size is 960 X 960 ) grid size divided by size requested minus 2 for border line to keep cells inside Grid box
  let sizing = ((960 / size)-2);

// creates rows
  for (r = 0; r < size; r++){
    let row = document.createElement("div");
    row.classList.add('row');
    container.appendChild(row);
  }
  // creates cells and attaches them to the rows
for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < size; j++) {
      let cell = document.createElement('div');
      cell.style.width = sizing + "px";
      cell.style.height = sizing + "px";
      cell.classList.add('cell');
      rows[j].appendChild(cell).className = "cell";
  
    }
  }
  }

  let newGame = () => {
    let size = prompt("What size grid would you like?");
    return(etch(size));
  }