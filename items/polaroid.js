function setup() {
  createCanvas(700, 500);
  background(0);
}

let picture = "";
function preload() {
  picture = loadImage("items/polaroid_photo.png");
}

function polaroidBig() {
  noStroke();
  //picture frame itself
  push();
  //translate(300, 0);
  //rotate(PI / 6);
  image(picture, 175, 50, 350, 400);
  pop();
}

function polaroidSmall(x, y) {
  noStroke();
  push();
  translate(x, y);
  rotate(PI / 6);
  fill(255);
  rect(0, 0, 50, 55);
  fill(0);
  rect(5, 5, 40);
  pop();
}

function draw() {
  polaroidBig();
  //polaroidSmall(50, 250);
}
