let gameStarted = false;
let startButton;
let characterX = 210; //starting position of aiden x
let characterY = 200;
let playerState = 0;
let bedroomVisible = true;
let hallwayVisible = false;

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
    displayMenu();
  } else {
    if (bedroomVisible) {
      bedroomAiden();
    }
    if (hallwayVisible) {
      // Call a function to display the hallway
      displayHallway();
      stairs.draw();
    }
    door.draw(); //door object
    updateCharacterPosition(); //character movement
    drawCharacter(characterX, characterY, playerState); //character with X and Y needed for movement
    if (isNearDoor()) {
      trial.write(test, "yes");
    }
  }
}

let testTwo =
  "Tonight the music seems so loud I wish that we could loose this crows. Maybe it'*s better this way, we'd hurt each other with the things we'd want to say. We could have been so good together, we could have danced this dance forever but now you're gone again and say Please babe";
let test =
  "Wait a minute, i think I left my conscience on your front door step, wait a minute i think i left my conscience in the sixth dimension. Hold on when I'm in there feel my hearts attention.You left your diary at my house and I read those pages you really love me baby. ";
let i = 0;
let y = -50;
let subString = "";
let choice1 = "";
let choice2 = "";

class dialogue {
  constructor(starter, choice1, choice2, ender1, ender2) {
    this.starter = starter;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.ender1 = ender1;
    this.ender2 = ender2;
  }

  write(str, choices) {
    //box & font style
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(40, 315, 620, 150);

    fill(255);
    noStroke();
    textSize(12);
    textAlign(LEFT);
    textFont("Courier");
    textWrap(CHAR);

    // inspired by https://www.youtube.com/watch?v=4dWb1x-of7I&t=209s
    let delay = setTimeout(function () {
      if (i < str.length) {
        subString += str[i];
        i++;
      }
    }, 1500);
    text(subString, 50, 325, 600, 375);
    if (i === str.length && choices === "yes") {
      clearTimeout(delay);
      return this.choices();
    } else if (i === str.length && choices === "no") {
      clearTimeout(delay);
      return console.log("done");
    }
  }

  choices() {
    let that = this;
    //box & font style
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(40, 315, 620, 150);
    noStroke();

    if (keyCode === 83) {
      y = 420;
    } else if (keyCode === 87) {
      y = 395;
    }
    fill(255, 0, 255, 50);
    rect(40, y, 620, 20);

    fill(255);
    text(subString, 50, 325, 600, 375);
    text(that.choice1, 50, 400, 600, 50);
    text(that.choice2, 50, 425, 600, 50);

    if (keyCode === 13 && y === 395) {
      subString = "";
      i = 0;
      return that.write("he-hewwo mwister obwama", "no");
    } else if (keyCode === 13 && y === 420) {
      subString = "";
      i = 0;
      return that.write(that.ender2);
    }
  }

  history() {}
}

let trial = new dialogue(
  test,
  "Angelica...",
  "Eliza-",
  "I'm not here for you",
  "dumbass motherfucker that is not the line"
);

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

  checkCollisionsFloor(180, 196, 300, 204);
}
//Door
let door = {
  color: [94, 76, 38],
  position: { x: 408, y: 136 },
  size: { width: 36, height: 60 },
  handleColor: 230,
  handlePosition: { x: 412, y: 166 },
  handleSize: 3,
  draw: function () {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
    fill(this.handleColor);
    rect(this.handlePosition.x, this.handlePosition.y, this.handleSize);
  },
};

function drawCharacter(x, y) {
  if (playerState === 0) {
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
  } else if (playerState === 1) {
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
  if (keyIsDown(84) && playerState === 0) {
    console.log("this isn't supposed to loop");
    playerState = 1;
  } else if (keyIsDown(84) && playerState === 1) {
    playerState = 0;
  }
}
//MOVEMENT
function updateCharacterPosition() {
  if (subString === "") {
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

//ANOTHER ROOM
function displayHallway() {
  //draws hallway scene
  noStroke();
  fill(191, 137, 67);
  rect(250, 0, 200, 500);
  stair(240, 325);
  stair(240, 100);
  stair(450, 40);
  stair(450, 215);
  stair(450, 390);
  fill(0);
  rect(325, 0, 50, 30);
  fill(94, 76, 38);
  stroke(217, 153, 35);
  strokeWeight(1);
  rect(325, 30, 50, 10);
  rect(330, 20, 40, 10);
  rect(335, 10, 30, 10);

  checkCollisionsFloor(250, 30, 200, 470);
}
function stair(x, y) {
  fill(94, 76, 38);
  rect(x, y, 10, 60);
}

let stairs = {
  position: { x: 240, y: 325 },
  size: { width: 10, height: 60 },
  isNear: function () {
    let distance = dist(
      characterX,
      characterY,
      this.position.x + this.size.width / 2,
      this.position.y + this.size.height / 2
    );
    return distance < 40;
  },
  draw: function () {
    fill(94, 76, 38);
    rect(this.position.x, this.position.y, this.size.width, this.size.height);
  },
};
