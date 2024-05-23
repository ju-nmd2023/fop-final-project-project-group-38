import { characterX, characterY } from "../Characters/Aiden.js";
let choices = {};
localStorage["dialogueChoices"] = JSON.stringify(choices);
let y = -50;
let a = 35;
let subString = "";
let dialogueActive = false;
//dialogues
class dialogue {
  constructor(trigger, text1, choice1, choice2, reply1, reply2, position) {
    this.trigger = trigger;
    this.text1 = text1;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.reply1 = reply1;
    this.reply2 = reply2;
    this.position = position;
  }

  dialogueBox(y) {
    fill(0);
    strokeWeight(2);
    stroke(255);
    rect(40, y, 620, 150);

    fill(255);
    noStroke();
    textSize(12);
    textAlign(LEFT);
    textFont("Courier");
    textWrap(CHAR);
  }

  write(str, y) {
    for (let i = 0; i < str.length; i++) {
      subString += str[i];
      text(subString, 50, y + 10, 600, 375);
    }
    subString = "";
  }

  history(choice) {
    choices[this.trigger] = choice;
    localStorage["dialogueChoices"] = JSON.stringify(choices);
    y = -50;
  }

  execute() {
    //box
    if (this.position !== "top") {
      a = 315;
    } else {
      a = 35;
    }
    this.dialogueBox(a);
    //case one: only one text
    if (this.choice1 === "" && this.reply1 === "") {
      this.write(this.text1, a);
      if (keyCode === 27) {
        this.history(this.text1);
        dialogueActive = false;
      }
    } else if (this.choice1 === "" && this.reply1 !== "") {
      //case two: only two texts
      this.write(this.text1, a);
      if (keyCode === 13) {
        if (this.text1 !== this.reply1) {
          this.text1 = this.reply1;
          this.write(this.text1, a);
        }
      } else if (keyCode === 27) {
        this.history(this.text1);
        dialogueActive = false;
      }
    } else {
      //case three: player has two choices
      this.write(this.text1, a);
      if (this.text1 !== this.reply1 && this.text1 !== this.reply2) {
        //choices
        if (keyCode === 83) {
          y = a + 105;
        } else if (keyCode === 87) {
          y = a + 80;
        }
        //highlight box
        fill(255, 0, 255, 50);
        rect(40, y, 620, 20);
        //displayed text
        fill(255);
        text(subString, 50, a + 10, 600, 375);
        text(this.choice1, 50, a + 85, 600, 50);
        text(this.choice2, 50, a + 110, 600, 50);
      }
      //player chose 1
      if (keyCode === 13 && y === a + 80) {
        this.text1 = this.reply1;
      } else if (keyCode === 13 && y === a + 105) {
        //player chose 2
        this.text1 = this.reply2;
        this.choice = "";
        this.reply1 = "";
      }
      if (keyCode === 27) {
        this.text1 = "";
        if (y === a + 80) {
          this.history(this.choice1);
        } else if (y === a + 105) {
          this.history(this.choice2);
        }
        return false;
      } else {
        return true;
      }
    }
  }
}
let girl = new dialogue(
  "girl",
  "I might have seen Ellie... Or have I? It's so hard to remember without a sweet treat to motivate me...",
  "Give Lollipop",
  "Give Fish",
  "Oh! I see, well she was running off before I could talk to her and she looked really frazzled. Could never be me, it's not good for my skin. But she went to the right.",
  "Eeeeek!! How could you do this?! You and your sister are horrible people! She went to the right, so please leave me alone now!",
  "top"
);

let cat1 = new dialogue(
  "cat1",
  "The answer you seek is closer than you presume.",
  "",
  "",
  "",
  "",
  "bottom"
);

let cat2 = new dialogue(
  "cat2",
  "Hey what's a 'semantic' element?",
  "I'm like eight years old, dude.",
  "A semantic element conveys its content to the browser & developer.",
  "Fair, carry on.",
  "Wow, look at Mr.Know-It-All everyone.",
  "bottom"
);

let car = new dialogue("car", "Kachow", "", "", "", "", "top");

function isNearDialogue(object) {
  let distance = dist(characterX, characterY, object.x, object.y);
  return distance < 50;
}
function displayDialoguePrompt(last) {
  textAlign(CENTER);
  fill(120);
  textSize(20);
  if (last === true) {
    text("Press 'X' to leave.", 340, 480);
    return;
  }
  text("Press 'E' to interact.", 350, 480);
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
  girl,
  cat1,
  cat2,
  car,
  isNearDialogue,
  displayDialoguePrompt,
  checkDialogueHistory,
};
