// Select color input
var colorPicker = document.getElementById("colorPicker");
// Select size input
var start = document.getElementById("sizePicker");

//Other variables for elements
var tRow = document.getElementById("inputHeight");
var tCell = document.getElementById("inputWidth");
var table = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()
start.addEventListener("submit", function(e) {
  e.preventDefault();
  table.innerHTML = "";
  var height = tRow.value;
  var width = tCell.value;
  makeGrid(height, width);
});

//creating the grid
function makeGrid(height, width) {
  for (let x = 0; x < height; x++) {
    let row = table.insertRow(x);
    for (let y = 0; y < width; y++) {
      let cell = row.insertCell(y);
      //adding color
      cell.addEventListener('click', function(e) {
        e.target.style.backgroundColor = colorPicker.value;
      })
    }
  }
};
