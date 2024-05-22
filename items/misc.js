function setup() {
  createCanvas(700, 500);
  background(0);
}

function oddFishRemains(x, y) {
  noStroke();
  //head & tail
  fill(150);
  rect(x - 55, y + 5, 5);
  rect(x - 50, y - 5, 5, 20);
  rect(x - 45, y - 10, 5, 25);
  rect(x - 40, y - 15, 15, 35);
  rect(x + 25, y - 5, 5, 15);
  rect(x + 30, y - 10, 5, 25);
  rect(x + 35, y - 15, 5, 15);
  rect(x + 40, y - 15, 5, 10);
  rect(x + 35, y + 5, 5, 15);
  rect(x + 40, y + 10, 5, 10);
  // bones
  fill(227, 225, 197);
  rect(x - 25, y, 50, 5);
  rect(x - 20, y - 5, 5);
  rect(x - 15, y - 10, 5);
  rect(x - 20, y + 5, 5);
  rect(x - 15, y + 10, 5);
  rect(x - 5, y - 5, 5);
  rect(x, y - 10, 5);
  rect(x + 5, y - 15, 5);
  rect(x - 5, y + 5, 5);
  rect(x, y + 10, 5);
  rect(x + 5, y + 15, 5);
  rect(x + 10, y - 5, 5);
  rect(x + 15, y - 10, 5);
  rect(x + 20, y - 15, 5);
  rect(x + 10, y + 5, 5);
  rect(x + 15, y + 10, 5);
  rect(x + 20, y + 15, 5);
  //eye
  fill(0);
  rect(x - 40, y - 5, 5);
}

function oddFish(x, y) {
  noStroke();
  //head & tail
  fill(150);
  rect(x - 55, y + 5, 5);
  rect(x - 50, y - 5, 5, 20);
  rect(x - 45, y - 10, 5, 25);
  rect(x - 40, y - 15, 20, 35);
  rect(x + 25, y - 5, 5, 15);
  rect(x + 30, y - 10, 5, 25);
  rect(x + 35, y - 15, 5, 15);
  rect(x + 40, y - 15, 5, 10);
  rect(x + 35, y + 5, 5, 15);
  rect(x + 40, y + 10, 5, 10);
  // body
  rect(x - 25, y - 20, 45);
  rect(x + 20, y - 15, 5, 35);
  fill(127, 125, 97);
  rect(x - 15, y - 30, 20, 5);
  rect(x - 20, y - 25, 30, 5);
  rect(x + 10, y - 20, 5);
  rect(x - 25, y + 5, 5);
  rect(x - 20, y + 10, 20, 5);
  rect(x, y + 5, 5);
  rect(x - 5, y, 5);
  //eye
  fill(0);
  rect(x - 40, y - 5, 5);
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
