const container = document.querySelector(".padContainer");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell")


let size = 16;
//rows
// function etch(size){

//sizing sets cell size by dividing grid area by number of size and subtracting 2px.
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