function setup() {
  createCanvas(500, 500);
}

function ellie() {
  //Ellie look
  strokeWeight(0);

  //head
  fill(163, 118, 39);
  rect(225, 185, 35, 45);
  //legs
  rect(225, 295, 10, 20);
  rect(250, 295, 10, 20);
  //arms
  rect(210, 245, 10, 30);
  rect(265, 245, 10, 30);
  //shoes
  fill(0);
  rect(225, 315, 10);
  rect(250, 315, 10);
  //pants
  fill(205, 196, 174);
  rect(220, 275, 45, 10);
  rect(220, 285, 20, 10);
  rect(245, 285, 20, 10);
  //eyes
  fill(0);
  rect(230, 200, 5, 10);
  rect(250, 200, 5, 10);
  //mouth
  rect(235, 215, 15, 5);
  //hair
  fill(64, 43, 8);
  rect(225, 180, 35, 5);
  rect(215, 185, 25, 5);
  rect(215, 190, 20, 5);
  rect(215, 195, 10, 30);
  rect(245, 185, 25, 5);
  rect(250, 190, 20, 5);
  rect(260, 195, 10, 30);
  //shirt
  fill(136, 209, 206);
  rect(220, 230, 45);
  //sleeves
  rect(210, 235, 10);
  rect(265, 235, 10);
  //tshirt image
  fill("yellow");
  rect(225, 240, 10, 5);
  rect(235, 240, 5, 15);
  rect(230, 250, 5);
  rect(225, 250, 5, 10);
  rect(225, 260, 15, 5);
  rect(245, 240, 5, 15);
  rect(250, 250, 5);
  rect(255, 240, 5, 25);
}

function draw() {
  background(156, 84, 134);
  ellie();
}
