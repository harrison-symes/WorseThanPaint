var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.addEventListener("mousedown", clickCanvas, false);
canvas.addEventListener("mouseup", releaseCanvas, false);

var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', getButton);

  }


var colour = "black";
var lineWidth = 1
var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;

function clickCanvas(event) {
  downX = event.clientX;
  downY = event.clientY;
}

function getButton(evt) {
  if (evt.target.value === "Red") {
    colour = "red";
    console.log("red");
  } else if (evt.target.value === "Green") {
    context.strokeStyle = 'green';
  } else if (evt.target.value === "Blue") {
    context.strokeStyle = "blue";
  } else if (evt.target.value === "Thick") {
    context.lineWidth = "10";
    console.log("thickLine");
  } else if (evt.target.value === "Thin") {
    context.lineWidth = "1";
    console.log("thinLine");
  }
}

function releaseCanvas(event) {
  upX = event.clientX;
  upY = event.clientY;
  dx = downX - upX;
  dy = downY - upY;
  console.log("down at " + downX + ", " + downY);
  console.log("up at " + downX + ", " + downY);
  console.log("dx: " + dx + ", dy: " + dy);

  context.beginPath;
  context.lineWidth = this.lineWidth;
  context.rect(downX -362- dx, downY - 50 - (dy), dx, dy);
  context.stroke();
  
  
}
