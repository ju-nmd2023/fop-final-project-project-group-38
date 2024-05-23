//imports
import * as player from "/Characters/Aiden.js";
import * as rooms from "/Buildings/all_rooms.js";
import * as dialogues from "/Interactive game/dialogue.js";
import * as items from "/items/all_items.js";
//load
let polaroidImg;
let letterImg;
//sounds
let clickSound = new Audio("/Interactive game/intro.mp3");
//game start
let gameStarted = false;
let startButton;
//variables for rooms visibility
let bedroomVisible = true;
let hallwayVisible = false;
let entryRoomVisible = false;
let houseAreaVisible = false;
//variables for dialogues
let subStringStart = "";
let k = 0;
let dialogueActive = false;
let choices = {};
localStorage["dialogueChoices"] = JSON.stringify(choices);
//overlays
let pictureDisplayed = false;
let overlayDisplayed = false;

function setup() {
  createCanvas(700, 500);
  startButton = createButton("Play");
  startButton.position(700, 500);
  startButton.mousePressed(startGame);
  clickSound = new Audio("Interactive game/playbutton.mp3");
  clickSound.volume = 0.1;
}
window.setup = setup;
//start, hide button after play
function startGame() {
  gameStarted = true;
  clickSound.play();
  startButton.hide(); //hide the button when game was started
}
// all draw, 3 rooms
function draw() {
  background(0);
  if (!gameStarted) {
    displayMenu(); //starting menu
  } else {
    if (bedroomVisible) {
      rooms.bedroomAiden();
      player.checkCollisionsFloor(180, 196, 300, 204);
      if (overlayDisplayed) {
        displayOverlay();
      }
    }
    if (hallwayVisible) {
      rooms.displayHallway();
      player.checkCollisionsFloor(250, 30, 200, 470);
    } else {
      rooms.door.draw(); //removing doors in hallway when its visible
    }
    if (entryRoomVisible) {
      rooms.displayEntryRoom(); // Display the entry room if it's visible
      player.checkCollisionsFloor(180, 220, 300, 180);
      if (pictureDisplayed) {
        displayPicture();
      }
    }
    if (houseAreaVisible) {
      rooms.displayHouseArea();
      player.checkCollisionsFloor(0, 200, 700, 300);
      //CONTINUE HERE PLS: check aiden state THEN which trigger
      if (
        dialogues.isNearDialogue(items.girl) &&
        !dialogues.checkDialogueHistory("girl1")
      ) {
        dialogues.displayDialoguePrompt();
        if (key === "e") {
          dialogueActive = true;
        }
        if (dialogueActive === true) {
          dialogues.girl1.execute();
          if (!dialogues.girl1.execute()) {
            dialogueActive = false;
          }
        }
      }
    }
    if (!dialogueActive) {
      player.updateCharacterPosition(); //character movement
    }

    player.drawCharacter(player.characterX, player.characterY);
    // transition from bedroom to hallway
    if (rooms.isNearDoor() && !hallwayVisible) {
      rooms.displayDoorPrompt();
      if (key === "x" || key === "X") {
        bedroomVisible = false;
        hallwayVisible = true;
      }
    }
    // next room, hallway and transition from stairs to entry room
    if (rooms.isNearStairs() && !entryRoomVisible && hallwayVisible) {
      rooms.displayStairsPrompt();
      if (key === "x" || key === "X") {
        hallwayVisible = false;
        entryRoomVisible = true;
      }
    }
    if (rooms.isNearEntryDoor() && !houseAreaVisible && entryRoomVisible) {
      rooms.displayDoorPrompt();
      if (key === "x" || key === "X") {
        entryRoomVisible = false;
        houseAreaVisible = true;
      }
    }
  }
}
window.draw = draw;

//starting screen
function displayMenu() {
  textAlign(CENTER);
  fill(255);
  textSize(15);
  textFont("Courier");
  let introduction =
    "Aiden is a boy, whose beloved sister disapears one day,\n without saying last goodbye.\n The only sign is the letter left on the desk in his room.\n Aiden has to find out what happened and where is Ellie...";
  if (k < introduction.length) {
    subStringStart += introduction[k];
    k++;
  }
  text(subStringStart, 350, 200);
}
//LETTER & Picture overlay when clicking on letter in bedroom and wardobe in entry room
function preload() {
  letterImg = loadImage("Interactive game/letter.png");
  polaroidImg = loadImage("Interactive game/polaroid_photo.png");
}
window.preload = preload;
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
window.mousePressed = mousePressed;
function displayOverlay() {
  image(letterImg, 450, 50, 200, 300);
}
function displayPicture() {
  image(polaroidImg, 450, 50, 250, 300);
}
