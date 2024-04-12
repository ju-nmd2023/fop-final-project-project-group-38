function setup() {
  createCanvas(700, 500);
}
function draw() {
  background(120, 132, 5);
  scale(1.3);
  //house
  fill(80, 61, 61);
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
  fill(70, 130, 180);
  rect(259, 132, 4, 10);
  rect(266, 132, 4, 10);
  rect(259, 147, 4, 7);
  rect(266, 147, 4, 7);
  rect(259, 158, 4, 7);
  rect(266, 158, 4, 7);
  //window up left
  rect(184, 79, 45, 28);
  fill("white");
  rect(184, 87, 45, 6);
  rect(194, 79, 5, 28);
  rect(214, 79, 5, 28);
  //window down left
  fill(70, 130, 180); //blue windows
  rect(192, 130, 20, 23);
  fill("white");
  rect(192, 139, 20, 5);
  rect(199, 130, 5, 23);
  //window up right
  fill(70, 130, 180);
  rect(310, 79, 30, 28);
  fill("white");
  rect(323, 79, 5, 28);
  rect(310, 85, 30, 5);
  //window down right
  fill(70, 130, 180);
  rect(315, 125, 20, 28);
  fill("white");
  rect(322, 125, 5, 28);
  rect(315, 134, 20, 5);
  //roof
  fill(160, 82, 45);
  rect(164, 34, 200, 10);
  fill(101, 67, 33);
  rect(164, 38, 200, 7);
  fill(160, 82, 45);
  rect(168, 26, 190, 10);
  rect(172, 22, 180, 10);
  rect(176, 15, 170, 10);
  //circle sign
  rect(260, 92, 3, 3);
  rect(258, 94, 3, 3);
  rect(256, 97, 3, 3);
  rect(254, 100, 3, 3);
  rect(256, 103, 3, 3);
  rect(258, 105, 3, 3);
  rect(260, 107, 3, 3);
  rect(262, 109, 3, 3);
  rect(264, 109, 3, 3);
  rect(266, 107, 3, 3);
  rect(268, 104, 3, 3);
  rect(270, 102, 3, 3);
  rect(270, 100, 3, 3);
  rect(268, 98, 3, 3);
  rect(266, 96, 3, 3);
  rect(264, 94, 3, 3);
  rect(262, 92, 3, 3);
  //small roof
  rect(240, 80, 50, 5);
  rect(245, 75, 40, 5);
  rect(250, 70, 30, 5);
  rect(253, 70, 25, 5);
  rect(255, 65, 20, 5);
  rect(258, 65, 16, 5);
  rect(259, 60, 13, 5);
  //shadows
  fill(128, 128, 128);
  rect(169, 44, 191, 4);
  rect(240, 84, 50, 4);
  fill(105, 105, 105);
  rect(230, 174, 70, 2);
}
