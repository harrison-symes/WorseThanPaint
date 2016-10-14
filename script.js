var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.addEventListener("mousedown", clickCanvas, false);
canvas.addEventListener("mouseup", releaseCanvas, false);

var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', getButton);

  }

var rectangles = []
var colour = "black";
var lineWidth = 5;
var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;
var fill = false;

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
  } else if (evt.target.value === "Clear") {
     context.clearRect(0,0,800,800);
     rectangles = [];
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
  rectangles.push(new Rectangle(downX -362- dx, downY - 50 - dy, dx, dy, this.colour, this.lineWidth));

  drawRects();
}

Rectangle.prototype.update = function () {
  drawRect(this);
}

function drawRects() {

  for (var i = 0; i < rectangles.length; i++) {
    var Rect = rectangles[i];
    
      drawRect(Rect);
  }
}

function drawRect(Rect) {
      context.beginPath();
      context.lineWidth = 10;
      context.strokeStyle = "green";
      context.rect(Rect.x, Rect.y, Rect.width, Rect.height);
      context.stroke;
      console.log("draw rect");
} 

function Rectangle(X, Y, Width, Height, Colour, lineWidth){
  this.x = X;
  this.y = Y;
  this.width = Width;
  this.height = Height;
  this.colour = Colour;
  this.lineWidth = lineWidth;
}
