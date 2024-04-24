//Find 
const container = document.querySelector(".padContainer");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell")


let size = 16;
//rows
function etch(){

  //clear the GD container so the new grid can be placed... 
container.innerHTML ="";

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
    cell.addEventListener('mouseover', () => {
      // cell.style.backgroundColor = 'gray';
      cell.style.backgroundColor = '#' + Math.floor(Math.random()* 16777215).toString(16);
    });
    cell.style.width = sizing + "px";
    cell.style.height = sizing + "px";
    cell.classList.add('cell');
    rows[j].appendChild(cell).className = "cell";
    
    }
  }
  }


  //new game button resets game field to the size selected.
  let newGame = () => {
    let newSize = prompt("What size grid would you like? Less than 100.");
    if (newSize > 100) { 
      alert("try again");
      newGame();
    } else { 
    size = parseInt(newSize);
    etch();
    }
  }
   etch();