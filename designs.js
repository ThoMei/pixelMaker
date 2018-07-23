// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Grid Function//
const myButton = document.getElementById('button');

myButton.onclick = makeGrid;

function makeGrid () {
  const myElement = document.getElementById('pixelCanvas');
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  myElement.innerHTML = '';
  for ( var i = 0; i < height; i++ ) {
    var tr = document.createElement('tr');
    myElement.appendChild(tr);

    for ( var j = 0; j < width; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }
  }
  const rowLength = myElement.rows.length;
  console.log(rowLength);
  return false;
}

//Color Input Update Function//

let myColor = document.getElementById('colorPicker').value;

document.getElementById('colorPicker').onchange = inputChange;

function inputChange(event){
  myColor = event.target.value;
}

//Pixel Click & Color Functionality//

document.getElementById('pixelCanvas').onclick = changeColor;

function changeColor (event) {
  const target = event.target;
  target.style.backgroundColor = myColor;
}

// Attempted to create functions that disable functionality of the grid submission button upon detection of a grid/after usage of submission 7-16-18//
/*if (makeGrid() === false){
  function disableGrid () {
    myButton.disabled = true;
  }
}*/

/*if rowLength > 2 {
  function disableGrid () {
    myButton.disabled = true;
  }
}*/
