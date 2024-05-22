//imports
import * as player from "/Characters/Aiden.js";
import * as rooms from "/Buildings/all_rooms.js";
import * as dialogues from "/Interactive game/dialogue.js";
import * as items from "/items/all_items.js";
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
let y = -50;
let subString = "";
let dialogueActive = false;
let choices = {};
localStorage["dialogueChoices"] = JSON.stringify(choices);

function setup() {
  createCanvas(700, 500);
  background(0);
  startButton = createButton("Play");
  startButton.position(700, 500);
  startButton.mousePressed(startGame);
}
window.setup = setup;
//start, hide button after play
function startGame() {
  gameStarted = true;
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
    }
    if (houseAreaVisible) {
      rooms.displayHouseArea();
      player.checkCollisionsFloor(0, 200, 700, 300);
      if (
        dialogues.isNearDialogue(girl) &&
        !dialogues.checkDialogueHistory("girl")
      ) {
        dialogues.displayDialoguePrompt();
        if (key === "e") {
          dialogueActive = true;
        }
        if (dialogueActive === true) {
          dialogues.girlDialogueHuman.execute();
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

let girl = {
  position: {
    x: 50,
    y: 450,
  },
};
