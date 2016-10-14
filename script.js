var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.addEventListener("mousedown", clickCanvas, false);


var bubbles = [];

// Bubble function which takes five properties needed to create bubbles.
function Bubble(radius, speed, width, xPos, yPos){
  this.radius = radius;
  this.speed = speed;
  this.width = width;
  this.xPos = xPos;
  this.yPos = yPos;

  this.count = 0;

  var signAssist = Math.floor(Math.random() * 2);
    if (signAssist === 1){
      this.sign = -1;
    }
    else {
      this.sign = 1;
    }
}

Bubble.prototype.update = function () { //Prototype on Bubble object - every Bubble object created can call the update method.
  this.count += this.sign * this.speed; //If sign value is - count decreases, if sign value is + count increases.
  // To draw the bubbles
  context.arc(this.xPos + Math.cos(this.count / 100) * this.radius, this.yPos + Math.sin(this.count / 100) * this.radius, this.width, 0, Math.PI * 2, false); //Sets location and size of bubbles to be drawn
  context.fillStyle = "#e4d2e4"; //Defines color of bubbles
  context.fill();
};

//Function to create each bubble.
function drawBubbles(){
    var randomX = 300; //Determine bubbles position on x axis (-200px so bubbles can move outside the canvas)
    var randomY = 300; // Determine bubbles position on y axis
    var speed = .2 // Determines random speed of bubble.
    var size = 5; // Determines random size of bubble.
    var radius = 50 + Math.random() * 75; //Determines random radius or bubble.

    var bubble = new Bubble (radius, speed, size, randomX, randomY); // Creates bubble object.
    bubbles.push(bubble); //Stores bubble object in bubble variable and adds it to the bubbles array
  drawUpdate();
}
drawBubbles();


function drawUpdate() {
  context.clearRect(0,0,800,800); //Clears canvas for new frame

    for (var i = 0; i<bubbles.length; i++){
      var myBubbles = bubbles[i];
      myBubbles.width += 0.1;
      myBubbles.update();

    }
    requestAnimationFrame(drawUpdate); //Creates animation loop / calls itself
}

function clickCanvas(event) {
  var clickX = event.clientX;
  var clickY = event.clientY;

  console.log("click at " + clickX + "," + clickY);

  for (var i = 0; i < bubbles.length; i++) {
    checkClick(bubbles[i], clickX, clickY);
  }

}

function checkClick(bubble, clickX, clickY) {
  var centerX = bubble.xPos;
  var centerY = bubble.yPos - (bubble.width/2);
  var dx = Math.abs(clickX - centerX);
  var dy = Math.abs(clickY - centerY);
  var radius = bubble.width;
  console.log(dx + " + " + dy + " <= " + radius);
  console.log("centerX = " + centerX);
  if ( (Math.pow(dx, 2) + Math.pow(dy, 2) ) <= Math.pow(radius, 2)){
    console.log('click within');
  } else {
    console.log("click without");
  }
}