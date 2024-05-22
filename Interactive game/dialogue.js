import { characterX, characterY } from "/Characters/Aiden.js";
let dialogueActive = false;
let choices = {};
localStorage["dialogueChoices"] = JSON.stringify(choices);
let y = -50;
let subString = "";
//dialogues
class dialogue {
  constructor(trigger, text1, choice1, choice2, reply1, reply2) {
    this.trigger = trigger;
    this.text1 = text1;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.reply1 = reply1;
    this.reply2 = reply2;
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

  write(str) {
    for (let i = 0; i < str.length; i++) {
      subString += str[i];
      text(subString, 50, 325, 600, 375);
    }
    subString = "";
  }

  history(choice) {
    console.log(choice);
    choices[this.trigger] = choice;
    localStorage["dialogueChoices"] = JSON.stringify(choices);
  }

  execute() {
    //box
    this.dialogueBox();
    //case one: only one text
    if (this.choice1 === "" && this.reply1 === "") {
      this.write(this.text1);
      if (keyCode === 27) {
        dialogueActive = false;
      }
    } else if (this.choice1 === "" && this.reply1 !== "") {
      //case two: only two texts
      this.write(this.text1);
      if (keyCode === 13) {
        if (this.text1 !== this.reply1) {
          this.text1 = this.reply1;
        }
      } else if (keyCode === 27) {
        dialogueActive = false;
      }
    } else {
      //case three: player has two choices
      this.write(this.text1);
      if (this.text1 !== this.reply1 && this.text1 !== this.reply2) {
        //choices
        if (keyCode === 83) {
          y = 420;
        } else if (keyCode === 87) {
          y = 395;
        }
        //highlight box
        fill(255, 0, 255, 50);
        rect(40, y, 620, 20);
        //displayed text
        fill(255);
        text(subString, 50, 325, 600, 375);
        text(this.choice1, 50, 400, 600, 50);
        text(this.choice2, 50, 425, 600, 50);
      }
      //player chose 1
      if (keyCode === 13 && y === 395) {
        this.text1 = this.reply1;
      } else if (keyCode === 13 && y === 420) {
        //player chose 2
        this.text1 = this.reply2;
        this.choice = "";
        this.reply1 = "";
      }
      if (keyCode === 27) {
        this.text1 = "";
        if (y === 395) {
          this.history(this.choice1);
        } else if (y === 420) {
          this.history(this.choice2);
        }
        dialogueActive = false;
      }
    }
  }
}
let girlDialogueHuman = new dialogue(
  "girl",
  "I don't remember what the girl was supposed to say, IF you bring me a lollipop and ONLY then.",
  "Where would I find a Lollipop?",
  "You are such a brat.",
  "If I were on the lookout for one, I'd check inside.",
  "Check the mirror before classifying your surroundings."
);

let girlDialogueCat = new dialogue(
  "girlAsCat",
  "Kitty! Come here so I can drag you around for solely my entertainment.",
  "",
  "",
  "",
  ""
);

let girlDialogueHuman2 = new dialogue(
  "girlWithLolli",
  "Yo-You actually got it. How did you convince the old cat? He doesn't even let me come near him.",
  "Determination",
  "Guess he must be mysogynistic.",
  "Well, regardless. A deal is a deal.\n all the info",
  "Well, regardless. A deal is a deal.\n all the info"
);

let catDialogueHuman = new dialogue("catAsHuman", "...", "", "", "", "");

let catDialogueCat = new dialogue(
  "cat",
  "I might have what you're looking for...\nFor a price",
  "A price?",
  "Of course, nothing in life is free, huh",
  "I'm hungry and there's plenty o' fish in the pond but they're surrounded by water if you're catching my drift...",
  "You got it."
);

let catDialogueCat2 = new dialogue(
  "catWithFish",
  "Aougha! That's some good fish you caught kid.\nAlright, the ol' lollipop is all yours.",
  "",
  "",
  "",
  ""
);

let pondDialogue = new dialogue(
  "pond",
  "Catching fish by hand sure is tough...",
  "",
  "...but your catlike reflexes help you.",
  "",
  ""
);

function isNearDialogue(object) {
  let distance = dist(
    characterX,
    characterY,
    object.position.x,
    object.position.y
  );
  return distance < 50;
}
function displayDialoguePrompt() {
  textAlign(CENTER);
  fill(120);
  textSize(20);
  text("Press 'E' to talk.", 350, 480);
}
function checkDialogueHistory(object) {
  choices = JSON.parse(localStorage.dialogueChoices);
  if (Object.hasOwn(choices, object)) {
    localStorage["dialogueChoices"] = JSON.stringify(choices);
    return true;
  } else {
    localStorage["dialogueChoices"] = JSON.stringify(choices);
    return false;
  }
}

export {
  dialogue,
  girlDialogueHuman,
  girlDialogueCat,
  girlDialogueHuman2,
  catDialogueCat,
  catDialogueHuman,
  catDialogueCat2,
  pondDialogue,
  isNearDialogue,
  displayDialoguePrompt,
  checkDialogueHistory,
};
