function setup() {
  createCanvas(700, 500);
  background(0, 0, 255);
}

let testTwo =
  "Tonight the music seems so loud I wish that we could loose this crows. Maybe it'*s better this way, we'd hurt each other with the things we'd want to say. We could have been so good together, we could have danced this dance forever but now you're gone again and say Please babe";
let test =
  "Wait a minute, i think I left my conscience on your front door step, wait a minute i think i left my conscience in the sixth dimension. Hold on when I'm in there feel my hearts attention.You left your diary at my house and I read those pages you really love me baby. ";
let i = 0;
let subString = "";

//code for starting dialogue
/* if (keyIsDown(84) && isNearCharacter === true) {
  write("insert text here");
}
*/

function write(str) {
  fill(0);
  strokeWeight(2);
  stroke(255);
  rect(40, 315, 620, 150);

  fill(255);
  noStroke();
  textFont("Courier");
  textWrap(CHAR);

  setTimeout(function () {
    if (i < str.length) {
      subString += str[i];
      console.log(i);
      i++;
    }
  }, 3000);
  text(subString, 50, 325, 600, 375);
}

function draw() {
  write(testTwo, true);
}
