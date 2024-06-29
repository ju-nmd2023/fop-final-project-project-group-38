let characterX = 210; //starting position of aiden in bedroom
let characterY = 200;
let characterState = 0;
//Aiden
function drawCharacter(x, y) {
  if (characterState === 0) {
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
  } else if (characterState === 1) {
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
  keyPressed();
}
//TRANSFORMATION
function keyPressed() {
  if (key === "t" && characterState === 0) {
    characterState = 1;
  } else if (key === "t" && characterState === 1) {
    characterState = 0;
  }
}
//MOVEMENT WSAD
function updateCharacterPosition() {
  if (keyIsDown(87)) {
    characterY -= 1.7;
  }
  if (keyIsDown(83)) {
    characterY += 1.7;
  }
  if (keyIsDown(65)) {
    characterX -= 1.7;
  }
  if (keyIsDown(68)) {
    characterX += 1.7;
  }
}
//check floor collision
function checkCollisionsFloor(x, y, width, height) {
  if (characterX < x) {
    characterX = x;
  } else if (characterX > x + width - 20) {
    characterX = x + width - 20;
  }
  if (characterY < y) {
    characterY = y;
  } else if (characterY > y + height - 36) {
    characterY = y + height - 36;
  }
}
export {
  characterX,
  characterY,
  characterState,
  drawCharacter,
  keyPressed,
  updateCharacterPosition,
  checkCollisionsFloor,
};
