function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(120, 132, 5);
  //house
  fill("white");
  strokeWeight(0);
  rect(170, 40, 190, 130);
  fill("brown");
  rect(165, 169, 200, 10);
  //stairs
  fill("grey");
  rect(240, 169, 50, 7);
  rect(230, 174, 70, 7);
  //door wall
  fill("pink");
  rect(240, 82, 50, 87);
  //door
  fill("brown");
  rect(254, 125, 20, 44);
  //door windows
  fill(173, 216, 230);
  rect(259, 132, 4, 10);
  rect(266, 132, 4, 10);
  rect(259, 147, 4, 7);
  rect(266, 147, 4, 7);
  rect(259, 158, 4, 7);
  rect(266, 158, 4, 7);
  //window up left
  rect(184, 79, 40, 28);
  fill("white");
  rect(201, 79, 6, 28);
  rect(184, 87, 40, 6);
  rect(190, 79, 5, 28);
  rect(213, 79, 5, 28);
  //window down left
  fill(173, 216, 230); //blue windows
  rect(192, 130, 20, 23);
  fill("white");
  rect(192, 139, 20, 5);
  rect(199, 130, 5, 23);
  //window up right

  //window down right

  //roof
  fill(160, 82, 45);
  rect(164, 34, 200, 10);
  fill(101, 67, 33);
  rect(164, 38, 200, 7);
  fill(160, 82, 45);
  rect(168, 26, 190, 10);
  rect(172, 22, 180, 10);
  rect(176, 15, 170, 10);
}
