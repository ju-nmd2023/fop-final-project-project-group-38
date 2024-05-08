let gameStarted = false;
let startButton;
let characterX = 210; //starting position of aiden x
let characterY = 200;

function setup() {
  createCanvas(700, 500);
  //start button
  startButton = createButton("Play");
  startButton.position(350, 260);
  startButton.mousePressed(startGame);
}
// start the game
function startGame() {
  gameStarted = true;
  startButton.hide();
}
function draw() {
  background(0); // background menu

  // If game is not started, display menu
  if (!gameStarted) {
    displayMenu();
  } else {
    // If game is started, display the game
    bedroomAiden();
    updateCharacterPosition();
    drawCharacter(characterX, characterY);
    checkCollisionsFloor();
    displayDialogue();
  }
}

// Function to display the menu
function displayMenu() {
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Start your journey!", 350, 200);
}

function bedroomAiden() {
  strokeWeight(0);
  // room block
  fill(134, 186, 104);
  rect(180, 100, 300);
  //floor
  fill(191, 137, 67);
  rect(180, 196, 300, 204);
  //door
  fill(94, 76, 38);
  rect(408, 136, 36, 60);
  fill(230);
  rect(412, 166, 3);
  //bed
  fill(230);
  rect(192, 172, 60, 24);
  fill(255);
  rect(204, 178, 36, 12);
  fill(210);
  rect(192, 190, 60, 6);
  fill(107, 166, 176);
  rect(192, 196, 60);
  fill(97, 156, 166);
  rect(192, 256, 60, 6);
  fill(94, 76, 38);
  rect(192, 262, 12);
  rect(240, 262, 12);
  //nightstand
  rect(258, 178, 24, 24);
  fill(124, 106, 68);
  rect(260, 180, 20, 6);
  rect(260, 188, 20, 12);
  fill(94, 76, 38);
  rect(268, 182, 4, 2);
  rect(268, 192, 4, 2);
  //rug
  fill(117, 46, 46);
  rect(300, 256, 72);
  rect(296, 256, 4, 72);
  rect(292, 268, 4, 48);
  rect(288, 280, 4, 24);
  rect(300, 328, 72, 4);
  rect(312, 332, 48, 4);
  rect(324, 336, 24, 4);
  rect(372, 256, 4, 72);
  rect(376, 268, 4, 48);
  rect(380, 280, 4, 24);
  rect(300, 252, 72, 4);
  rect(312, 248, 48, 4);
  rect(324, 244, 24, 4);
  //wardrobe
  fill(94, 76, 38);
  rect(300, 136, 88);
  fill(124, 106, 68);
  rect(304, 140, 38, 80);
  rect(346, 140, 38, 80);
  fill(94, 76, 38);
  rect(332, 180, 6, 4);
  rect(350, 180, 6, 4);
  //desk
  fill(50);
  rect(432, 268, 48, 72);
  rect(432, 340, 12, 24);
  rect(468, 340, 12, 24);
  fill(30);
  rect(432, 340, 48, 6);
  //desk-stuff
  fill(230);
  rect(428, 292, 4);
  rect(432, 288, 4, 12);
  rect(436, 284, 4, 20);
  rect(440, 280, 4, 20);
  rect(444, 284, 4, 12);
  rect(448, 288, 4);
  fill(148, 40, 40);
  rect(440, 316, 20, 12);
  fill(128, 20, 20);
  rect(440, 328, 20, 4);
  fill(39, 118, 10);
  rect(440, 332, 20, 4);
  //chair
  fill(50);
  rect(402, 312, 24);
  rect(398, 296, 4, 16);
  rect(398, 336, 4, 24);
  rect(422, 336, 4, 24);
  fill(30);
  rect(398, 312, 4, 24);
  rect(398, 336, 28, 4);
  //car
  fill(26, 36, 176);
  rect(208, 350, 24, 8);
  rect(200, 358, 40, 8);
  fill(235, 233, 127);
  rect(236, 358, 4);
  fill(0);
  rect(212, 354, 16, 4);
  rect(208, 362, 8);
  rect(224, 362, 8);
  //poster
  fill(0);
  rect(204, 112, 36, 48);
  fill(255, 0, 0);
  rect(220, 144, 4, 2);
  rect(218, 142, 8, 2);
  rect(216, 140, 12, 2);
  rect(214, 134, 16, 6);
  rect(214, 132, 7, 2);
  rect(223, 132, 7, 2);
  rect(215, 131, 1);
  rect(228, 131, 1);
  rect(217, 131, 2, 1);
  rect(224, 131, 2, 1);
  rect(216, 130, 2);
  rect(226, 130, 2);
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

function openDoor() {
  if (key === "e") {
    interactDoor = true;
  }
}
//movement
let moveSpeed = 2.6;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
//movement WSAd
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

//dialogue
let dialogueText = "";
let dialogueTimer = 0;
let showNextDialogue = false;

function displayDialogue() {
  textAlign(CENTER);
  fill(0);
  textSize(20);
  text(dialogueText, 200, 100);
}
