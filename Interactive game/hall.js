function setup() {
  createCanvas(700, 500);
}
function drawCellar() {
  background(0);
  // room block
  fill(42, 35, 45);
  rect(180, 100, 300);
  //floor
  strokeWeight(0);
  fill(32, 32, 32);
  rect(180, 220, 300, 180);
  //rug
  fill(145, 56, 49);
  rect(261, 280, 120, 50);
  rect(254, 280, 7, 4);
  rect(254, 290, 7, 4);
  rect(254, 302, 7, 4);
  rect(254, 315, 7, 4);
  rect(254, 326, 7, 4);
  rect(380, 280, 7, 4);
  rect(380, 290, 7, 4);
  rect(380, 304, 7, 4);
  rect(380, 315, 7, 4);
  rect(380, 326, 7, 4);
  //wardrobe
  fill(92, 64, 51);
  rect(272, 185, 70, 40);
  strokeWeight(2);
  stroke(128, 70, 27);
  rect(272, 190, 70, 10);
  rect(272, 210, 70, 10);
  rect(305, 194, 3, 3);
  rect(305, 214, 3, 3);
  //chair
  fill(123, 63, 0);
  strokeWeight(1);
  stroke(110, 38, 14);
  rect(243, 199, 2, 8);
  rect(258, 199, 2, 8);
  rect(242, 192, 20, 8);
  rect(243, 209, 2, 12);
  rect(258, 209, 2, 12);
  rect(242, 206, 20, 5);
  //stairs
  strokeWeight(1);
  rect(390, 215, 90, 15);
  rect(400, 200, 80, 15);
  rect(410, 185, 70, 15);
  rect(420, 170, 60, 15);
  rect(430, 155, 50, 15);
  rect(440, 140, 40, 15);
  rect(450, 125, 30, 15);
  rect(460, 110, 20, 15);
  rect(465, 99, 15, 11);
  //painting
  fill(47, 79, 79);
  rect(285, 140, 40, 30);
  fill(0);
  strokeWeight(0);
  rect(300, 148, 8, 15);
  fill(255, 255, 255);
  rect(302, 154, 5, 5);
  rect(302, 150, 5, 7);
  fill("red");
  rect(302, 158, 6, 12);
  fill(0);
  rect(305, 152, 2, 2);
  rect(302, 152, 2, 2);
}
function draw() {
  drawCellar();
  updateCharacterPosition();
  drawCharacter(characterX, characterY);
  checkCollisionsFloor();
}
let characterX = 400;
let characterY = 200;
let moveSpeed = 2.5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
//movement
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
//character
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
//movement on WSAD keys pressed
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
//when WSAD released movemet stops
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

//floor collision
let floorX = 180;
let floorY = 196;
let floorWidth = 300;
let floorHeight = 204;
function checkCollisionsFloor() {
  if (characterX < floorX) {
    characterX = floorX;
  } else if (characterX > floorX + floorWidth - 20) {
    characterX = floorX + floorWidth - 20;
  }
  if (characterY < floorY) {
    characterY = floorY;
  } else if (characterY > floorY + floorHeight - 36) {
    characterY = floorY + floorHeight - 36;
  }
}
