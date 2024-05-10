function setup() {
  createCanvas(700, 500);
  background(0);
}

function bonbon(x, y) {
  noStroke();
  //fill colour
  fill(222, 115, 195);
  rect(x - 50, y - 20, 15, 40);
  rect(x - 35, y - 10, 5, 20);
  rect(x - 25, y - 10, 5, 20);
  rect(x - 20, y - 25, 40, 50);
  rect(x + 20, y - 10, 5, 20);
  rect(x + 30, y - 10, 5, 20);
  rect(x + 35, y - 20, 15, 40);
  //outline
  fill(148, 25, 117);
  rect(x - 55, y - 15, 5);
  rect(x - 55, y - 5, 5, 10);
  rect(x - 55, y + 10, 5);
  rect(x - 50, y - 25, 5, 10);
  rect(x - 50, y - 10, 5);
  rect(x - 50, y + 5, 5);
  rect(x - 50, y + 15, 5, 10);
  rect(x - 45, y - 25, 5);
  rect(x - 45, y + 20, 5);
  rect(x - 40, y - 20, 5);
  rect(x - 40, y + 15, 5);
  rect(x - 35, y - 15, 5);
  rect(x - 35, y + 10, 5);
  rect(x - 30, y - 10, 5, 20);
  rect(x - 25, y - 20, 5, 10);
  rect(x - 25, y + 10, 5, 10);
  rect(x - 20, y - 25, 10, 5);
  rect(x - 20, y + 20, 10, 5);
  rect(x - 10, y - 30, 20, 5);
  rect(x - 10, y + 25, 20, 5);
  rect(x + 10, y - 25, 10, 5);
  rect(x + 10, y + 20, 10, 5);
  rect(x + 20, y - 20, 5, 10);
  rect(x + 20, y + 10, 5, 10);
  rect(x + 25, y - 10, 5, 20);
  rect(x + 30, y - 15, 5);
  rect(x + 30, y + 10, 5);
  rect(x + 35, y - 20, 5);
  rect(x + 35, y + 15, 5);
  rect(x + 40, y - 25, 5);
  rect(x + 40, y + 20, 5);
  rect(x + 45, y - 25, 5, 10);
  rect(x + 45, y - 10, 5);
  rect(x + 45, y + 5, 5);
  rect(x + 45, y + 15, 5, 10);
  rect(x + 50, y - 15, 5);
  rect(x + 50, y - 5, 5, 10);
  rect(x + 50, y + 10, 5);
  //stick
  fill(220);
  rect(x - 2.5, y + 30, 5, 70);
}

function draw() {
  bonbon(300, 300);
}
