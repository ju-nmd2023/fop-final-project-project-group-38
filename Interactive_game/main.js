//imports
import * as player from "/Characters/Aiden.js";
import * as rooms from "/Buildings/all_rooms.js";
import * as dialogues from "/Interactive_game/dialogue.js";
import * as items from "/items/all_items.js";

//load
let polaroidImg;
let letterImg;
let diaryImg;
let diaryPage1;
let diaryPage2;

//sounds
let clickSound = new Audio("Interactive_game/playbutton.mp3");

//game start
let gameStarted = false;
let startButton;
let diaryButton = false;

//variables for rooms visibility
let bedroomVisible = true;
let hallwayVisible = false;
let entryRoomVisible = false;
let houseAreaVisible = false;
let lastAreaVisible = false;

//variables for dialogues
let subStringStart = "";
let k = 0;
let dialogueActive = false;
let choices = {};
localStorage["dialogueChoices"] = JSON.stringify(choices);

//overlays
let pictureDisplayed = false;
let overlayDisplayed = false;

//diary pages state
let diaryOverlayDisplayed = false;
let currentDiaryPage = 1;
let nextPageButton, prevPageButton;

function setup() {
  createCanvas(700, 500);
  startButton = createButton("Play");
  startButton.position(700, 550); // Center the start button
  startButton.mousePressed(startGame);
  clickSound.volume = 0.1;
}
window.setup = setup;
// Diary
function diary() {
  diaryImg = createImg("/Interactive_game/diary.png");
  let diaryButton = createButton("");
  diaryButton.id("diaryButton");
  diaryButton.position(1000, 130);
  diaryImg.parent(diaryButton);
  diaryImg.style("width", "90px");
  diaryButton.mousePressed(() => {
    diaryOverlayDisplayed = !diaryOverlayDisplayed;
    if (diaryOverlayDisplayed) {
      currentDiaryPage = 1;
      createDiaryButtons();
    }
  });
}
function displayDiaryOverlay() {
  if (currentDiaryPage === 1) {
    image(diaryPage1, 150, 0, 370, 550);
  } else if (currentDiaryPage === 2) {
    image(diaryPage2, 150, 0, 370, 550);
  }
}
function createDiaryButtons() {
  nextPageButton = createButton("->");
  nextPageButton.position(940, 600);
  nextPageButton.mousePressed(nextDiaryPage);
  prevPageButton = createButton("<-");
  prevPageButton.position(900, 600);
  prevPageButton.mousePressed(prevDiaryPage);
}
function nextDiaryPage() {
  if (currentDiaryPage < 2) {
    currentDiaryPage++;
  }
}
function prevDiaryPage() {
  if (currentDiaryPage > 1) {
    currentDiaryPage--;
  }
}
//start, hide button after play
function startGame() {
  gameStarted = true;
  clickSound.play();
  startButton.hide();
  diaryButton = true;
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
      diary();
      //interaction
      if (
        dialogues.isNearDialogue(items.car) &&
        !dialogues.checkDialogueHistory("car")
      ) {
        dialogues.displayDialoguePrompt();
        if (key === "e") {
          dialogueActive = true;
        }
        if (dialogueActive === true) {
          dialogues.car.execute();
          if (!dialogues.car.execute()) {
            dialogueActive = false;
          }
        }
      }
      //letter
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
      //interaction
      if (
        dialogues.isNearDialogue(items.cat1) &&
        !dialogues.checkDialogueHistory("cat1")
      ) {
        dialogues.displayDialoguePrompt();
        if (key === "e") {
          dialogueActive = true;
        }
        if (dialogueActive === true) {
          dialogues.cat1.execute();
          if (!dialogues.cat1.execute()) {
            dialogueActive = false;
          }
        }
      }
      //Polaroid
      if (pictureDisplayed) {
        displayPicture();
      }
    }
    if (houseAreaVisible) {
      rooms.displayHouseArea();
      player.checkCollisionsFloor(0, 200, 700, 300);
      //interaction
      if (
        dialogues.isNearDialogue(items.girl) &&
        !dialogues.checkDialogueHistory("girl")
      ) {
        dialogues.displayDialoguePrompt();
        if (key === "e") {
          dialogueActive = true;
        }
        if (dialogueActive === true) {
          dialogues.girl.execute();
          if (!dialogues.girl.execute()) {
            dialogueActive = false;
          }
        }
      } else if (
        dialogues.isNearDialogue(items.cat2) &&
        !dialogues.checkDialogueHistory("cat2")
      ) {
        dialogues.displayDialoguePrompt();
        if (key === "e") {
          dialogueActive = true;
        }
        if (dialogueActive === true) {
          dialogues.cat2.execute();
          if (!dialogues.cat2.execute()) {
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
    //transition from entry room to house area
    if (rooms.isNearEntryDoor() && !houseAreaVisible && entryRoomVisible) {
      rooms.displayDoorPrompt();
      if (key === "x" || key === "X") {
        entryRoomVisible = false;
        houseAreaVisible = true;
      }
    }
    //transition from house area to ???
    if (
      dialogues.isNearDialogue(items.lastExit) &&
      !lastAreaVisible &&
      houseAreaVisible
    ) {
      dialogues.displayDialoguePrompt(true);
      if (key === "x" || key === "X") {
        clear();
        rooms.displayLastArea();
      }
    }
    if (diaryOverlayDisplayed) {
      displayDiaryOverlay();
      createDiaryButtons();
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
  letterImg = loadImage("/Interactive_game/letter.png");
  polaroidImg = loadImage("/Interactive_game/polaroid_photo.png");
  diaryImg = loadImage("/Interactive_game/diary.png");
  diaryPage1 = loadImage("/Interactive_game/Monday.png");
  diaryPage2 = loadImage("/Interactive_game/Thursday.png");
}
window.preload = preload;

function hideDiaryButtons() {
  // tried this to hide buttons after overlay is closed
  if (nextPageButton) nextPageButton.hide();
  if (prevPageButton) prevPageButton.hide();
}
function displayOverlay() {
  image(letterImg, 450, 50, 200, 300);
}
function displayPicture() {
  image(polaroidImg, 450, 50, 250, 300);
}

function mousePressed() {
  if (diaryOverlayDisplayed && mouseButton === RIGHT) {
    // idk why but right works as left??
    diaryOverlayDisplayed = false;
  } else if (mouseX >= 1000 && mouseX <= 1090 && mouseY >= 130 && mouseY <= 220)
    if (bedroomVisible && mouseButton === RIGHT) {
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
    } else if (pictureDisplayed) {
      pictureDisplayed = false;
    }
  }
}
window.mousePressed = mousePressed;
