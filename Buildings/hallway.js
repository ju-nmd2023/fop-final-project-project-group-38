function setup() {
  createCanvas(700, 500);
  background(0);
}

function doors(x, y) {
  fill(94, 76, 38);
  rect(x, y, 10, 60);
}

function hallway() {
  noStroke();
  fill(191, 137, 67);
  rect(250, 0, 200, 500);
  doors(240, 325);
  doors(240, 100);
  doors(450, 40);
  doors(450, 215);
  doors(450, 390);
  fill(0);
  rect(325, 0, 50, 30);
  fill(94, 76, 38);
  stroke(217, 153, 35);
  strokeWeight(1);
  rect(325, 30, 50, 10);
  rect(330, 20, 40, 10);
  rect(335, 10, 30, 10);
}

function draw() {
  hallway();
}
