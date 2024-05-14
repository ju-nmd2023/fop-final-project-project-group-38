let gameStarted = false;
let startButton;
let characterX = 210; //starting position of aiden in bedroom
let characterY = 200;
let bedroomVisible = true;
let hallwayVisible = false;
let entryRoomVisible = false;

function setup() {
  createCanvas(700, 500);
  startButton = createButton("Play");
  startButton.position(700, 500);
  startButton.mousePressed(startGame);
}

function startGame() {
  gameStarted = true;
  startButton.hide(); //hide the button when game was started
}

function draw() {
  background(0); // background menu
  if (!gameStarted) {
    displayMenu(); //starting menu
  } else {
    if (bedroomVisible) {
      bedroomAiden();
    }
    if (hallwayVisible) {
      displayHallway();
    } else {
      door.draw(); //removing doors in hallway when its visible
    }
    if (entryRoomVisible) {
      displayEntryRoom(); // Display the entry room if it's visible
    }
    updateCharacterPosition(); //character movement
    drawCharacter(characterX, characterY); //character with X and Y needed for movement

    // transition from bedroom to hallway
    if (isNearDoor() && !hallwayVisible) {
      displayDoorPrompt();
      if (key === "x" || key === "X") {
        bedroomVisible = false;
        hallwayVisible = true;
      }
    }

    // next room, hallway and transition from stairs to entry room
    if (isNearStairs() && !entryRoomVisible && hallwayVisible) {
      displayStairsPrompt();
      if (key === "x" || key === "X") {
        entryRoomVisible = true;
      }
    }
  }
}
//starting screen
function displayMenu() {
  textAlign(CENTER);
  fill(255);
  textSize(15);
  textFont("Courier");
  text(
    "Aiden is a boy, whose beloved sister disapears one day,\n without saying last goodbye.\n The only sign is the letter left on the desk in his room.\n Aiden has to find out what happened and where is Ellie...",
    350,
    200
  );
}

function bedroomAiden() {
  strokeWeight(0);
  // room block
  fill(134, 186, 104);
  rect(180, 100, 300);
  //floor
  fill(191, 137, 67);
  rect(180, 196, 300, 204);
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
  //collision for this room
  checkCollisionsFloor(180, 196, 300, 204);
}
// door as an object have to transform it with class---constructor
let door = {
  color: [94, 76, 38],
  position: {
    x: 408,
    y: 136,
  },
  size: {
    width: 36,
    height: 60,
  },
  handleColor: 230,
  handlePosition: {
    x: 412,
    y: 166,
  },
  handleSize: 3,
  // function to draw the door
  draw: function () {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
    fill(this.handleColor);
    rect(this.handlePosition.x, this.handlePosition.y, this.handleSize);
  },
};

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
//MOVEMENT WSAD
function updateCharacterPosition() {
  if (keyIsDown(87)) {
    characterY -= 1.5;
  }
  if (keyIsDown(83)) {
    characterY += 1.5;
  }
  if (keyIsDown(65)) {
    characterX -= 1.5;
  }
  if (keyIsDown(68)) {
    characterX += 1.5;
  }
}
//floor collision
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

function isNearDoor() {
  let distance = dist(
    characterX,
    characterY,
    door.position.x + door.size.width / 2,
    door.position.y + door.size.height / 2
  );
  return distance < 50;
}
// when close to the door show this
function displayDoorPrompt() {
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Press 'X' to exit the room.", 340, 480);
}

//ANOTHER ROOM HALLWAY
function displayHallway() {
  noStroke();
  fill(191, 137, 67);
  rect(250, 0, 200, 500);
  //doors
  exit(240, 325);
  exit(240, 100);
  exit(450, 40);
  exit(450, 215);
  exit(450, 390);
  fill(0);
  rect(325, 0, 50, 30);
  fill(94, 76, 38);
  stroke(217, 153, 35);
  strokeWeight(1);
  //collision for this room
  checkCollisionsFloor(250, 30, 200, 470);
  stairs.draw();
}

function exit(x, y) {
  fill(94, 76, 38);
  rect(x, y, 10, 60);
}
// Stairs as an object needed for exit interaction
let stairs = {
  position: {
    x: 325,
    y: 10,
  },
  size: {
    width: 50,
    height: 30,
  },
  color: [94, 76, 38],
  draw: function () {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
  },
};
function isNearStairs() {
  let distance = dist(
    characterX,
    characterY,
    stairs.position.x + stairs.size.width / 2,
    stairs.position.y + stairs.size.height / 2
  );
  return distance < 50;
}
function displayStairsPrompt() {
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Press 'X' to go downstairs.", 350, 480);
}
// ANOTHER ROOM - ENTRY ROOM
function displayEntryRoom() {
  strokeWeight();
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
    //doorsExit
  fill("brown");
  rect(309, 399, 60, 10);
  
  checkCollisionsFloor(180, 220, 300, 180);
}
