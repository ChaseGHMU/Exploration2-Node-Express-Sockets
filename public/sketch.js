var socket;


function setup(){
  var canvas = createCanvas(1000,600);
  canvas.parent('sketch-holder');
  background(51);
  socket = io.connect("www.chasejordonallen.com:3000");
  socket.on('mouse',newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(255,0,100);
  ellipse(data.x,data.y,30,30);
}

function mouseDragged(){
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,30,30);
}

function draw(){
}
