const container = document.querySelector(".padContainer");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell")
let size = (16);

//rows
// function etch(size){

  // let sizing = 960 / 16;

  for (r = 0; r < size; r++){
    let row = document.createElement("div");
    // row.style.width = "59px";
    // row.style.height = "59px";
    row.classList.add('row');
    container.appendChild(row);
  }

for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < size; j++) {
      let cell = document.createElement('div');
      cell.style.width = "58px";
      cell.style.height = "58px";
      cell.classList.add('cell');
      rows[j].appendChild(cell).className = "cell";
    }
  }
  // }

