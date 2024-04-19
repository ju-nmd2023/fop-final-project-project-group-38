let characterX = 200;
let characterY = 200;
let moveSpeed = 2.5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(120, 132, 5);
  updateCharacterPosition();
  drawCharacter(characterX, characterY);
}

function updateCharacterPosition() {
  if (movingUp) {
    characterY -= moveSpeed;
  }
  if (movingDown) {
    characterY += moveSpeed;
  }
  if (movingLeft) {
    characterX -= moveSpeed;
  }
  if (movingRight) {
    characterX += moveSpeed;
  }
}

function drawCharacter(x, y) {
  //Aiden look
  fill(0); //tshirt actually
  strokeWeight(0);
  //body
  rect(x, y, 20, 14);
  //head
  fill(255, 228, 181); //skin
  rect(x, y - 15, 20, 15);
  //legs
  rect(x, y + 20, 5, 10);
  rect(x + 15, y + 20, 5, 10);
  //hands
  rect(x - 3, y + 5, 3, 10);
  rect(x + 20, y + 5, 3, 10);
  //shoes
  fill(0);
  rect(x, y + 26, 5, 5);
  rect(x + 15, y + 26, 5, 5);
  //pants
  fill(0, 102, 51);
  rect(x, y + 14, 20, 4);
  rect(x, y + 18, 9, 3);
  rect(x + 11, y + 18, 9, 3);
  //eyes
  fill(0);
  rect(x + 4, y - 10, 2, 2);
  rect(x + 14, y - 10, 2, 2);
  //hair
  rect(x - 1, y - 15, 3, 5);
  rect(x + 18, y - 15, 3, 5);
  rect(x + 14, y - 15, 4, 4);
  rect(x + 1, y - 15, 4, 4);
  //hat
  fill("red");
  rect(x, y - 20, 20, 4);
  rect(x - 1, y - 17, 10, 4);
  rect(x + 11, y - 17, 10, 4);
  //mouth
  fill(0);
  rect(x + 8, y - 5, 4, 1);
  //tshirt image
  fill("yellow");
  rect(x + 6, y + 4, 2, 2);
  rect(x + 7, y + 4, 2, 7);
  rect(x + 10, y + 4, 4, 2);
  rect(x + 10, y + 6, 2, 2);
  rect(x + 12, y + 7, 1, 1);
  rect(x + 12, y + 8, 1, 2);
  rect(x + 10, y + 9, 3, 2);
  //sleeves
  fill(0);
  rect(x + 20, y + 2, 3, 6);
  rect(x - 3, y + 2, 3, 6);
}

function keyPressed() {
  if (key === "w") {
    movingUp = true;
  } else if (key === "s") {
    movingDown = true;
  } else if (key === "a") {
    movingLeft = true;
  } else if (key === "d") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "w") {
    movingUp = false;
  } else if (key === "s") {
    movingDown = false;
  } else if (key === "a") {
    movingLeft = false;
  } else if (key === "d") {
    movingRight = false;
  }
}
