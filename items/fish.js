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

function fish(x, y) {
  noStroke();
  //body
  fill(150);
  rect(x - 45, y - 5, 5);
  rect(x - 40, y - 10, 10, 15);
  rect(x - 30, y - 15, 15, 25);
  rect(x - 15, y - 20, 20, 35);
  rect(x + 5, y - 15, 15, 25);
  rect(x + 20, y - 10, 10, 15);
  //outline & tail
  fill(127, 125, 97);
  rect(x - 50, y - 5, 5);
  rect(x - 45, y - 10, 5);
  rect(x - 45, y, 5);
  rect(x - 40, y - 15, 10, 5);
  rect(x - 40, y + 5, 10, 5);
  rect(x - 30, y - 20, 15, 5);
  rect(x - 30, y + 10, 15, 5);
  rect(x - 15, y - 25, 20, 5);
  rect(x - 15, y + 15, 20, 5);
  rect(x - 15, y, 15, 5);
  rect(x, y - 5, 5);
  rect(x + 5, y - 20, 15, 5);
  rect(x + 5, y + 10, 15, 5);
  rect(x + 20, y - 15, 10, 5);
  rect(x + 20, y + 5, 10, 5);
  rect(x + 30, y - 10, 5, 15);
  rect(x + 35, y - 15, 5, 25);
  rect(x + 40, y - 20, 5, 15);
  rect(x + 40, y, 5, 15);
  rect(x + 45, y - 20, 5, 10);
  rect(x + 45, y + 5, 5, 10);
  //eye
  fill(0);
  rect(x - 30, y - 10, 5);
}

function fishRemains(x, y) {
  noStroke();
  //head & tail
  fill(150);
  rect(x - 45, y - 5, 5);
  rect(x - 40, y - 10, 10, 15);
  rect(x - 30, y - 15, 15, 25);
  //outline & tail
  fill(127, 125, 97);
  rect(x - 50, y - 5, 5);
  rect(x - 45, y - 10, 5);
  rect(x - 45, y, 5);
  rect(x - 40, y - 15, 10, 5);
  rect(x - 40, y + 5, 10, 5);
  rect(x - 30, y - 20, 15, 5);
  rect(x - 30, y + 10, 15, 5);
  rect(x - 20, y - 20, 5, 35);
  rect(x + 30, y - 10, 5, 15);
  rect(x + 35, y - 15, 5, 25);
  rect(x + 40, y - 20, 5, 15);
  rect(x + 40, y, 5, 15);
  rect(x + 45, y - 20, 5, 10);
  rect(x + 45, y + 5, 5, 10);
  //bones
  fill(227, 225, 197);
  rect(x - 15, y - 5, 45, 5);
  rect(x - 15, y - 10, 5, 15);
  rect(x - 10, y - 15, 5);
  rect(x - 10, y + 5, 5);
  rect(x, y - 10, 5, 15);
  rect(x + 5, y - 15, 5);
  rect(x + 5, y + 5, 5);
  rect(x + 10, y - 20, 5);
  rect(x + 10, y + 10, 5);
  rect(x + 15, y - 10, 5, 15);
  rect(x + 20, y - 15, 5);
  rect(x + 20, y + 5, 5);
  rect(x + 25, y - 20, 5);
  rect(x + 25, y + 10, 5);
  //eye
  fill(0);
  rect(x - 30, y - 10, 5);
}

function draw() {
  fish(350, 250);
}
