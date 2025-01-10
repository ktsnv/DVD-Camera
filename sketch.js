let x = 219;
let y = 155;
let xv = 1;
let yv = 1;
let speed = 5;
let s = 100;
let capture;

function setup() {
  
  createCanvas(displayWidth, displayHeight);
  capture = createCapture(VIDEO);
  capture.size(s, s);
}

function draw() {
  background(220);
  
  square(x,y,s);
  image(capture, x, y, s, s);
  x += xv * speed;
  y += yv * speed;
  if (x<0) {
    xv = 1;
  }
  if (x>(displayWidth-s)) {
    xv = -1;
  }
    if (y<0) {
    yv = 1;
  }
  if (y>(displayHeight-s)) {
    yv = -1;
  }
}
