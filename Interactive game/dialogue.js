function setup() {
  createCanvas(700, 500);
  background(0, 0, 255);
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
//code for starting dialogue
/* if (keyIsDown(84) && isNearCharacter === true) {
  dialogue("insert text here");
}
*/

function monologue(str) {
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

  let y = 395;

  // inspired by https://www.youtube.com/watch?v=4dWb1x-of7I&t=209s
  setTimeout(function () {
    if (i < str.length) {
      subString += str[i];
      console.log(i);
      i++;
    }
  }, 1500);
  text(subString, 50, 325, 600, 375);
  if (i === str.length) {
    choice1 = "Angelica...";
    choice2 = "I'm not here for you...";
    if (key === "s") {
      y += 25;
    } else if (key === "w") {
      y = 395;
    }
    fill(255, 0, 255, 50);
    rect(40, y, 620, 20);
  }
  fill(255);
  text(choice1, 50, 400, 600, 50);
  text(choice2, 50, 425, 600, 50);

  if (keyCode === 13) {
    subString = "";
  }
}

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

function draw() {
  //dialogue(testTwo);
  trial.write(test, "yes");
  //trial.write(trial.ender1, "no");
}
