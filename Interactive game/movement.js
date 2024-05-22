//imports
import * as player from "/Characters/Aiden.js";
import * as rooms from "/Buildings/all_rooms.js";
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
let i = 0;
let y = -50;
let subString = "";
let choices = {};

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
    }
    player.updateCharacterPosition(); //character movement
    player.drawCharacter(player.characterX, player.characterY);
    // transition from bedroom to hallway
    if (rooms.isNearDoor() && !hallwayVisible) {
      trial.write();
      //rooms.displayDoorPrompt();
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
//dialogues
class dialogue {
  constructor(trigger, starter, choice1, choice2, ender1, ender2, state) {
    this.trigger = trigger;
    this.starter = starter;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.ender1 = ender1;
    this.ender2 = ender2;
    this.state = state;
  }

  dialogueBox() {
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
  }

  write() {
    let that = this;
    if ((that.state = true)) {
      //box & font style
      this.dialogueBox();
      //typing the string
      if (i < that.starter.length) {
        subString += that.starter[i];
        i++;
      }
      text(subString, 50, 325, 600, 375);
      //adding choices if any are given
      if (i === that.starter.length && that.choice1 !== "") {
        if (keyCode === 40) {
          y = 420;
        } else if (keyCode === 38) {
          y = 395;
        }
        //highlight box
        fill(255, 0, 255, 50);
        rect(40, y, 620, 20);
        //displayed text
        fill(255);
        text(subString, 50, 325, 600, 375);
        text(that.choice1, 50, 400, 600, 50);
        text(that.choice2, 50, 425, 600, 50);

        //choosing selected choice
        if (keyCode === 13 && y === 395) {
          that.starter = "";
          subString = "";
          i = 0;
          while (i < that.ender1.length) {
            subString += that.ender1[i];
            i++;
          }
          text(subString, 50, 325, 600, 375);
          that.history(that.choice1);
        } else if (keyCode === 13 && y === 420) {
          that.starter = "";
          subString = "";
          i = 0;
          while (i < that.ender2.length) {
            subString += that.ender2[i];
            i++;
          }
          text(subString, 50, 325, 600, 375);
          that.history(that.choice2);
          if (
            (that.ender1 === subString || that.ender2 === subString) &&
            keyCode === 13
          ) {
            console.log("are you there god");
            this.state = false;
          }
        }
        //if no choices are given
      } else if (
        that.starter.length &&
        that.choice1.length === 0 &&
        keyCode === 13
      ) {
        subString = "";
        that.starter = "";
        i = 0;
        while (subString !== that.ender1) {
          subString += this.ender1[i];
          i++;
          console.log(i);
        }
        text(subString, 50, 325, 600, 375);
        if (keycode === 13) {
          this.state = false;
        }
      }
    }
  }

  history(choice) {
    choices[this.trigger] = choice;
    localStorage["dialogueChoices"] = JSON.stringify(choices);
  }
}
let trial = new dialogue(
  "door",
  "first text to introduce the player or smth",
  "choose me!!",
  "no, choose me!",
  "you chose right",
  "where did he come from, where did he go",
  true
);
