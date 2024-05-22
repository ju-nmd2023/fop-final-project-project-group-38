let gameStarted = false;
let startButton;
let characterX = 210; //starting position of aiden in bedroom
let characterY = 200;
let characterState = 0;
//variables for rooms visibility
let bedroomVisible = true;
let hallwayVisible = false;
let entryRoomVisible = false;
let houseAreaVisible = false;
//variables for dialogues
let subStringStart = "";
let i = 0;
//sounds
let clickSound = new Audio("play.mp3");
//overlays
let picture = "polaroid_photo.png";
let overlayDisplayed = false;
let letterImg;
let pictureDisplayed = false;
let polaroidImg;

function setup() {
  createCanvas(700, 500);
  startButton = createButton("Play");
  startButton.position(700, 500);
  startButton.mousePressed(startGame);
  clickSound = new Audio("playbutton.mp3");
  clickSound.volume = 0.1;
}
//start, hide button after play
function startGame() {
  gameStarted = true;
  clickSound.play();
  startButton.hide(); //hide the button when game was started
}
// all draw, 3 rooms
function draw() {
  background(0); // background menu
  if (!gameStarted) {
    displayMenu(); //starting menu
  } else {
    if (bedroomVisible) {
      bedroomAiden();
      if (overlayDisplayed) {
        displayOverlay();
      }
    }
    if (hallwayVisible) {
      displayHallway();
    } else {
      door.draw(); //removing doors in hallway when its visible
    }
    if (entryRoomVisible) {
      displayEntryRoom(); // Display the entry room if it's visible
      if (pictureDisplayed) {
        displayPicture();
      }
    }
    if (houseAreaVisible) {
      displayHouseArea();
    }
    updateCharacterPosition(); //character movement
    drawCharacter(characterX, characterY, characterState);
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
        hallwayVisible = false;
        entryRoomVisible = true;
      }
    }
    if (isNearEntryDoor() && !houseAreaVisible && entryRoomVisible) {
      displayDoorPrompt();
      if (key === "x" || key === "X") {
        entryRoomVisible = false;
        houseAreaVisible = true;
      }
    }
  }
}
//starting screen
function displayMenu() {
  textAlign(CENTER);
  fill(255);
  textSize(15);
  textFont("Montserrat");
  let introduction =
    "Aiden is a boy, whose beloved sister disapears one day,\n without saying last goodbye.\n The only sign is the letter left on the desk in his room.\n Aiden has to find out what happened and where is Ellie...";
  setTimeout(function () {
    if (i < introduction.length) {
      subStringStart += introduction[i];
      i++;
    }
  }, 2000);
  text(subStringStart, 350, 200);
}
// First room
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
  //letter
  fill(230);
  rect(428, 292, 4);
  rect(432, 288, 4, 12);
  rect(436, 284, 4, 20);
  rect(440, 280, 4, 20);
  rect(444, 284, 4, 12);
  rect(448, 288, 4);
  //collision for this room
  checkCollisionsFloor(180, 196, 300, 204);
}
// door as an object
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
  //function to draw the door
  draw: function () {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
    fill(this.handleColor);
    rect(this.handlePosition.x, this.handlePosition.y, this.handleSize);
  },
};
//LETTER
function preload() {
  letterImg = loadImage("letter.png");
  polaroidImg = loadImage("polaroid_photo.png");
}
function mousePressed() {
  if (bedroomVisible && mouseButton === LEFT) {
    if (mouseX >= 400 && mouseX <= 448 && mouseY >= 280 && mouseY <= 292) {
      overlayDisplayed = !overlayDisplayed;
    } else if (overlayDisplayed) {
      //exit the overlay if its displayed and the mouse is clicked outside of it
      overlayDisplayed = false;
    }
  }
  if (entryRoomVisible && mouseButton === LEFT) {
    if (mouseX >= 200 && mouseX <= 400 && mouseY >= 50 && mouseY <= 350) {
      pictureDisplayed = !pictureDisplayed;
    } else if (overlayDisplayed) {
      overlayDisplayed = false;
    }
  }
}
function displayOverlay() {
  image(letterImg, 450, 50, 200, 300);
}
function displayPicture() {
  image(polaroidImg, 450, 50, 250, 300);
}

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
  if (keyIsDown(84) && characterState === 0) {
    characterState = 1;
  } else if (keyIsDown(84) && characterState === 1) {
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
//function to detect if Aiden is near doors
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
  background(0);
  strokeWeight();
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
  //door
  fill("brown");
  rect(309, 399, 60, 10);

  translate(10, 12);
  //CAT black
  fill("black");
  strokeWeight(0);
  //face
  rect(200, 184, 15, 10);
  rect(198, 187, 3, 4);
  rect(214, 187, 3, 4);
  //ears
  rect(200, 182, 4, 6);
  rect(211, 182, 4, 6);
  //body
  fill("black");
  rect(204, 194, 20, 10);
  //legs
  rect(204, 200, 3, 10);
  rect(208, 200, 3, 10);
  rect(217, 200, 3, 10);
  rect(221, 200, 3, 10);
  //tail
  rect(223, 194, 4, 2);
  rect(226, 192, 3, 2);
  rect(228, 190, 3, 2);
  fill("white");
  rect(229, 189, 2, 2);
  //nose
  fill(0);
  rect(206, 189, 2, 2);
  //eyes
  fill("yellow");
  rect(203, 187, 3, 3);
  rect(209, 187, 3, 3);

  checkCollisionsFloor(180, 220, 300, 180);
}

//door in entry room, needed new object
let entrydoor = {
  color: ["brown"],
  position: {
    x: 309,
    y: 398,
  },
  size: {
    width: 60,
    height: 10,
  },
  draw: function () {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
  },
};
function isNearEntryDoor() {
  let distance = dist(
    characterX,
    characterY,
    entrydoor.position.x + entrydoor.size.width / 2,
    entrydoor.position.y + entrydoor.size.height / 2
  );
  return distance < 50;
}
/* import function drawHouseArea from "house-area.js;
{console.log ("loaded")} */ //for importing code from house-area.js but doesnt work
function displayHouseArea() {
  push();
  background(120, 132, 5);
  scale(1.2);
  // Move the entire house 10 pixels to the right
  translate(40, 0);
  //house
  fill(80, 61, 61);
  strokeWeight(0);
  rect(170, 40, 190, 130);
  fill("brown");
  rect(165, 169, 200, 10);
  //stairs
  fill("grey");
  rect(240, 169, 50, 7);
  rect(230, 174, 70, 7);
  //door wall
  fill("pink");
  rect(240, 82, 50, 87);
  //door
  fill("brown");
  rect(254, 125, 20, 44);
  //door windows
  fill(70, 130, 180);
  rect(259, 132, 4, 10);
  rect(266, 132, 4, 10);
  rect(259, 147, 4, 7);
  rect(266, 147, 4, 7);
  rect(259, 158, 4, 7);
  rect(266, 158, 4, 7);
  //window up left
  rect(184, 79, 45, 28);
  fill("white");
  rect(184, 87, 45, 6);
  rect(194, 79, 5, 28);
  rect(214, 79, 5, 28);
  //window down left
  fill(70, 130, 180); //blue windows
  rect(192, 130, 20, 23);
  fill("white");
  rect(192, 139, 20, 5);
  rect(199, 130, 5, 23);
  //window up right
  fill(70, 130, 180);
  rect(310, 79, 30, 28);
  fill("white");
  rect(323, 79, 5, 28);
  rect(310, 85, 30, 5);
  //window down right
  fill(70, 130, 180);
  rect(315, 125, 20, 28);
  fill("white");
  rect(322, 125, 5, 28);
  rect(315, 134, 20, 5);
  //roof
  fill(160, 82, 45);
  rect(164, 34, 200, 10);
  fill(101, 67, 33);
  rect(164, 38, 200, 7);
  fill(160, 82, 45);
  rect(168, 26, 190, 10);
  rect(172, 22, 180, 10);
  rect(176, 15, 170, 10);
  //circle sign
  rect(260, 92, 3, 3);
  rect(258, 94, 3, 3);
  rect(256, 97, 3, 3);
  rect(254, 100, 3, 3);
  rect(256, 103, 3, 3);
  rect(258, 105, 3, 3);
  rect(260, 107, 3, 3);
  rect(262, 109, 3, 3);
  rect(264, 109, 3, 3);
  rect(266, 107, 3, 3);
  rect(268, 104, 3, 3);
  rect(270, 102, 3, 3);
  rect(270, 100, 3, 3);
  rect(268, 98, 3, 3);
  rect(266, 96, 3, 3);
  rect(264, 94, 3, 3);
  rect(262, 92, 3, 3);
  //small roof
  rect(240, 80, 50, 5);
  rect(245, 75, 40, 5);
  rect(250, 70, 30, 5);
  rect(253, 70, 25, 5);
  rect(255, 65, 20, 5);
  rect(258, 65, 16, 5);
  rect(259, 60, 13, 5);
  //shadows
  fill(128, 128, 128);
  rect(169, 44, 191, 4);
  rect(240, 84, 50, 4);
  fill(105, 105, 105);
  rect(230, 174, 70, 2);

  translate(-50, 0);
  //playground
  fill(0);
  rect(77, 240, 5, 90);
  rect(122, 240, 5, 90);
  rect(68, 235, 70, 5);
  rect(77, 230, 5, 5);
  rect(122, 230, 5, 5);
  rect(80, 270, 53, 5);
  rect(117, 225, 5, 5);
  rect(112, 220, 5, 5);
  rect(107, 215, 5, 5);
  rect(102, 210, 5, 5);
  rect(82, 225, 5, 5);
  rect(87, 220, 5, 5);
  rect(92, 215, 5, 5);
  rect(97, 210, 5, 5);
  fill("red");
  rect(82, 240, 40, 30);
  fill("grey");
  rect(82, 230, 40, 5);
  rect(87, 225, 30, 5);
  rect(92, 220, 20, 5);
  rect(97, 215, 10, 5);
  //door
  fill(0);
  rect(96, 250, 10, 10);
  //ladder
  fill("yellow");
  rect(92, 250, 5, 80);
  rect(105, 250, 5, 80);
  rect(95, 270, 10, 5);
  rect(95, 280, 10, 5);
  rect(95, 290, 10, 5);
  rect(95, 300, 10, 5);
  rect(95, 310, 10, 5);
  rect(95, 320, 10, 5);
  //slide
  rect(130, 270, 5, 5);
  rect(133, 275, 5, 5);
  rect(135, 280, 5, 5);
  rect(138, 285, 5, 5);
  rect(141, 290, 5, 5);
  rect(145, 295, 5, 5);
  rect(148, 300, 5, 5);
  rect(151, 305, 5, 5);
  rect(155, 310, 5, 5);
  rect(160, 315, 5, 5);
  rect(165, 320, 5, 5);
  rect(170, 325, 10, 5);

  scale(0.7);
  translate(-110, 240);
  //girl look
  fill(0);
  strokeWeight(0);
  //tshirt
  fill("pink");
  rect(200, 200, 20, 14);
  //head
  fill(255, 255, 255);
  rect(200, 185, 20, 15);
  //legs
  rect(200, 220, 5, 10);
  rect(215, 220, 5, 10);
  //hands
  rect(197, 205, 3, 10);
  rect(220, 205, 3, 10);
  //shoes
  fill("pink");
  rect(200, 226, 5, 5);
  rect(215, 226, 5, 5);
  //skirt
  fill("pink");
  rect(200, 214, 20, 7);
  //eyes
  fill("blue");
  rect(204, 190, 2, 2);
  rect(214, 190, 2, 2);
  //hair
  fill("yellow");
  rect(199, 185, 3, 5);
  rect(218, 185, 3, 5);
  rect(214, 185, 4, 4);
  rect(201, 185, 4, 4);
  //buns
  rect(195, 178, 10, 8);
  rect(215, 178, 10, 8);
  //hair top
  fill("yellow");
  rect(200, 180, 18, 7);
  //mouth
  fill(0);
  rect(208, 195, 4, 1);
  //sleeves
  fill("pink");
  rect(220, 202, 3, 6);
  rect(197, 202, 3, 6);
  //cheecks
  fill(255, 190, 153);
  rect(215, 194, 3, 3);
  rect(202, 194, 3, 3);
  //ears
  fill("white");
  rect(220, 191, 1, 3);
  rect(199, 191, 1, 3);

  //swing
  translate(0, 0);
  fill(105, 105, 105);
  rect(340, 50, 8, 80);
  rect(340, 50, 90, 8);
  rect(430, 50, 8, 80);
  rect(375, 50, 4, 60);
  rect(395, 50, 4, 60);
  fill(0);
  rect(373, 105, 28, 10);
  //sand ground
  strokeWeight(8);
  stroke(205, 133, 63);
  fill(225, 191, 146);
  rect(400, 180, 70, 50);
  strokeWeight(0);
  //plants
  fill("green");
  rect(370, -44, 60, 60);
  fill("yellow");
  rect(376, -30, 5, 5);
  rect(415, -35, 5, 5);
  rect(410, 0, 5, 5);
  rect(380, -5, 5, 5);
  //tree
  fill("brown");
  rect(290, -96, 20, 113);
  fill("green");
  rect(260, -130, 80, 80);
  //path
  fill(238, 232, 190);
  rect(520, 18, 80, 340);
  rect(120, 250, 850, 80);
  //Bush
  fill(0, 100, 0);
  rect(340, -14, 40, 30);
  rect(690, -14, 40, 30);
  rect(670, -44, 50, 60);
  //tree right
  fill("brown");
  rect(740, -80, 20, 95);
  fill(0, 100, 0);
  rect(720, -170, 60, 90);
  //plants
  fill("purple");
  rect(150, 160, 5, 5);
  rect(290, 50, 5, 5);
  rect(650, 190, 5, 5);
  rect(350, 160, 5, 5);
  rect(170, 220, 5, 5);
  rect(690, 90, 5, 5);
  rect(770, 160, 5, 5);
  rect(840, 60, 5, 5);
  //bush playground
  fill("green");
  rect(320, 110, 20, 20);
  rect(438, 110, 20, 20);
  rect(290, 201, 20, 30);
  //water
  fill(70, 130, 180);
  rect(740, 100, 100, 80);
  rect(730, 110, 10, 60);
  rect(720, 120, 10, 40);
  rect(840, 110, 10, 60);
  rect(850, 120, 10, 40);
  pop();

  //collision works from other room
  checkCollisionsFloor(0, 200, 700, 300);
}
