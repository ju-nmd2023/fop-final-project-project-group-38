function setup() {
  createCanvas(700, 500);
  background(0);
}

function polaroidBig() {
  noStroke();
  //picture frame itself
  push();
  fill(255);
  translate(300, 0);
  rotate(PI / 6);
  rect(0, 0, 350, 375);
  fill(0, 0, 255);
  rect(25, 25, 300);
  // insert image
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
