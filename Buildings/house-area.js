function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(120, 132, 5);
  scale(1.2);
  // Move the entire house 10 pixels to the right
  translate(40, 0);
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

  translate(-50, 0);
  //playground
  fill(0);
  rect(77, 240, 5, 90);
  rect(122, 240, 5, 90);
  rect(68, 235, 70, 5);
  rect(77, 230, 5, 5);
  rect(122, 230, 5, 5);
  rect(80, 270, 53, 5);
  rect(117, 225, 5, 5);
  rect(112, 220, 5, 5);
  rect(107, 215, 5, 5);
  rect(102, 210, 5, 5);
  rect(82, 225, 5, 5);
  rect(87, 220, 5, 5);
  rect(92, 215, 5, 5);
  rect(97, 210, 5, 5);
  fill("red");
  rect(82, 240, 40, 30);
  fill("grey");
  rect(82, 230, 40, 5);
  rect(87, 225, 30, 5);
  rect(92, 220, 20, 5);
  rect(97, 215, 10, 5);
  //door
  fill(0);
  rect(96, 250, 10, 10);
  //ladder
  fill("yellow");
  rect(92, 250, 5, 80);
  rect(105, 250, 5, 80);
  rect(95, 270, 10, 5);
  rect(95, 280, 10, 5);
  rect(95, 290, 10, 5);
  rect(95, 300, 10, 5);
  rect(95, 310, 10, 5);
  rect(95, 320, 10, 5);
  //slide
  rect(130, 270, 5, 5);
  rect(133, 275, 5, 5);
  rect(135, 280, 5, 5);
  rect(138, 285, 5, 5);
  rect(141, 290, 5, 5);
  rect(145, 295, 5, 5);
  rect(148, 300, 5, 5);
  rect(151, 305, 5, 5);
  rect(155, 310, 5, 5);
  rect(160, 315, 5, 5);
  rect(165, 320, 5, 5);
  rect(170, 325, 10, 5);

  //GIRL
  scale(0.7);
  translate(-110, 240);
  //girl look
  fill(0);
  strokeWeight(0);
  //tshirt
  fill("pink");
  rect(200, 200, 20, 14);
  //head
  fill(255, 255, 255);
  rect(200, 185, 20, 15);
  //legs
  rect(200, 220, 5, 10);
  rect(215, 220, 5, 10);
  //hands
  rect(197, 205, 3, 10);
  rect(220, 205, 3, 10);
  //shoes
  fill("pink");
  rect(200, 226, 5, 5);
  rect(215, 226, 5, 5);
  //skirt
  fill("pink");
  rect(200, 214, 20, 7);
  //eyes
  fill("blue");
  rect(204, 190, 2, 2);
  rect(214, 190, 2, 2);
  //hair
  fill("yellow");
  rect(199, 185, 3, 5);
  rect(218, 185, 3, 5);
  rect(214, 185, 4, 4);
  rect(201, 185, 4, 4);
  //buns
  rect(195, 178, 10, 8);
  rect(215, 178, 10, 8);
  //hair top
  fill("yellow");
  rect(200, 180, 18, 7);
  //mouth
  fill(0);
  rect(208, 195, 4, 1);
  //sleeves
  fill("pink");
  rect(220, 202, 3, 6);
  rect(197, 202, 3, 6);
  //cheecks
  fill(255, 190, 153);
  rect(215, 194, 3, 3);
  rect(202, 194, 3, 3);
  //ears
  fill("white");
  rect(220, 191, 1, 3);
  rect(199, 191, 1, 3);
  //swing
  translate(0, 0);
  fill(105, 105, 105);
  rect(340, 50, 8, 80);
  rect(340, 50, 90, 8);
  rect(430, 50, 8, 80);
  rect(375, 50, 4, 60);
  rect(395, 50, 4, 60);
  fill(0);
  rect(373, 105, 28, 10);
  //sand ground
  strokeWeight(8);
  stroke(205, 133, 63);
  fill(225, 191, 146);
  rect(400, 180, 70, 50);
  strokeWeight(0);
  //plants
  fill("green");
  rect(370, -44, 60, 60);
  fill("yellow");
  rect(376, -30, 5, 5);
  rect(415, -35, 5, 5);
  rect(410, 0, 5, 5);
  rect(380, -5, 5, 5);
  //tree
  fill("brown");
  rect(290, -96, 20, 113);
  fill("green");
  rect(260, -130, 80, 80);
  //path
  fill(238, 232, 190);
  rect(520, 18, 80, 340);
  rect(120, 250, 850, 80);
  //Bush
  fill(0, 100, 0);
  rect(340, -14, 40, 30);
  rect(690, -14, 40, 30);
  rect(670, -44, 50, 60);
  //tree right
  fill("brown");
  rect(740, -80, 20, 95);
  fill(0, 100, 0);
  rect(720, -170, 60, 90);
  //plants
  fill("purple");
  rect(150, 160, 5, 5);
  rect(290, 50, 5, 5);
  rect(650, 190, 5, 5);
  rect(350, 160, 5, 5);
  rect(170, 220, 5, 5);
  rect(690, 90, 5, 5);
  rect(770, 160, 5, 5);
  rect(840, 60, 5, 5);
  //bush playground
  fill("green");
  rect(320, 110, 20, 20);
  rect(438, 110, 20, 20);
  rect(290, 201, 20, 30);
  //water
  fill(70, 130, 180);
  rect(740, 100, 100, 80);
  rect(730, 110, 10, 60);
  rect(720, 120, 10, 40);
  rect(840, 110, 10, 60);
  rect(850, 120, 10, 40);
}
