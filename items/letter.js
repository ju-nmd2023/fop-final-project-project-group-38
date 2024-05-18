let font = "";
function preload() {
  font = loadFont("items/Sacramento-Regular.otf");
}

function setup() {
  createCanvas(700, 500);
  background(0);
}

function clover() {
  fill(100);
  noStroke();
  rect(400, 378, 2, 6);
  rect(402, 376, 2);
  rect(402, 384, 2);
  rect(404, 374, 2);
  rect(404, 386, 2);
  rect(406, 372, 6, 2);
  rect(406, 388, 6, 2);
  rect(412, 366, 2, 6);
  rect(412, 374, 2);
  rect(412, 386, 2);
  rect(412, 390, 2, 6);
  rect(414, 364, 2);
  rect(414, 372, 2, 4);
  rect(414, 386, 2, 4);
  rect(414, 396, 2);
  rect(416, 362, 2);
  rect(416, 376, 2);
  rect(416, 384, 2);
  rect(416, 398, 2);
  rect(418, 360, 6, 2);
  rect(418, 378, 2);
  rect(418, 382, 2);
  rect(418, 400, 6, 2);
  rect(420, 380, 2);
  rect(422, 378, 2);
  rect(422, 382, 2);
  rect(424, 362, 2);
  rect(424, 376, 2);
  rect(424, 384, 2);
  rect(424, 398, 2);
  rect(426, 364, 2);
  rect(426, 372, 2, 4);
  rect(426, 386, 2, 4);
  rect(426, 396, 2);
  rect(428, 366, 2, 6);
  rect(428, 374, 2);
  rect(428, 386, 2);
  rect(428, 390, 2, 6);
  rect(430, 372, 6, 2);
  rect(430, 388, 6, 2);
  rect(436, 374, 2);
  rect(436, 386, 2);
  rect(438, 376, 2);
  rect(438, 384, 2);
  rect(440, 378, 2, 6);
  rect(430, 390, 2);
  rect(432, 392, 2);
  rect(434, 394, 2);
  rect(436, 396, 2, 4);
  rect(438, 400, 2, 4);
  rect(440, 404, 2, 4);
  rect(442, 408, 2, 4);
  rect(444, 412, 2);
  rect(410, 380, 6, 2);
  rect(420, 370, 2, 6);
  rect(420, 386, 2, 6);
  rect(426, 380, 6, 2);
}

function letter() {
  fill(233, 214, 184);
  rect(200, 50, 300, 400);
  fill(0);
  textFont(font);
  textSize(18);
  text(
    "Dear Aiden, \n since you're reading this, it means I left last night. I have been thinking about running away for so long now, I feel like it's the only thing on my mind. \n The only reason I had not left earlier was you. You have to know this. I never wanted to leave you but this is the only way I can ensure your safety. \n I have a plan and I am going to get you back as soon as possible but I need to take care of some things first. \n \n Stay safe, please \n -Ellie",
    225,
    75,
    250,
    350
  );
  clover();
}

function draw() {
  letter();
}
