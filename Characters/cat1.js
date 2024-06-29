function setup() {
  createCanvas(500, 500);
}

function cat(x, y) {
  //CAT
  fill("grey");
  strokeWeight(0);
  //face
  rect(x, y, 15, 10);
  rect(x - 2, y + 3, 3, 4);
  rect(x + 14, y + 3, 3, 4);
  //ears
  rect(x, y - 5, 4, 6);
  rect(x + 10, y - 5, 4, 6);
  fill("white");
  rect(x + 11, y - 4, 2, 3);
  rect(x + 1, y - 4, 2, 3);
  //body
  fill("grey");
  rect(x + 4, y + 10, 20, 10);
  //legs
  rect(x + 4, y + 16, 3, 10);
  rect(x + 8, y + 16, 3, 10);
  rect(x + 17, y + 16, 3, 10);
  rect(x + 21, y + 16, 3, 10);
  //tail
  rect(x + 23, y + 10, 4, 2);
  rect(x + 26, y + 8, 3, 2);
  rect(x + 28, y + 6, 3, 2);
  fill("white");
  rect(x + 29, y + 5, 2, 2);
  //nose
  fill(0);
  rect(x + 6, y + 5, 2, 2);
  //eyes
  rect(x + 3, y + 3, 2, 2);
  rect(x + 9, y + 3, 2, 2);
  //mouth
  rect(x + 5, y + 7, 1, 1);
  rect(x + 8, y + 7, 1, 1);
}

function draw() {
  background(12);
  cat(200, 184);
}
