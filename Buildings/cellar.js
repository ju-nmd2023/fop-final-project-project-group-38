function setup() {
  createCanvas(700, 500);
}
function draw() {
  background(0);

  // room block
  fill(42, 35, 45);
  rect(180, 100, 300);
  //floor
  strokeWeight(0);
  fill(32, 32, 32);
  rect(180, 220, 300, 180);
  //rug
  fill(145, 56, 49);
  rect(261, 280, 120, 50);
  rect(254, 280, 7, 4);
  rect(254, 290, 7, 4);
  rect(254, 302, 7, 4);
  rect(254, 315, 7, 4);
  rect(254, 326, 7, 4);
  rect(380, 280, 7, 4);
  rect(380, 290, 7, 4);
  rect(380, 304, 7, 4);
  rect(380, 315, 7, 4);
  rect(380, 326, 7, 4);
  //wardrobe
  fill(92, 64, 51);
  rect(272, 185, 70, 40);
  strokeWeight(2);
  stroke(128, 70, 27);
  rect(272, 190, 70, 10);
  rect(272, 210, 70, 10);
  rect(305, 194, 3, 3);
  rect(305, 214, 3, 3);
  //chair
  fill(123, 63, 0);
  strokeWeight(1);
  stroke(110, 38, 14);
  rect(243, 199, 2, 8);
  rect(258, 199, 2, 8);
  rect(242, 192, 20, 8);
  rect(243, 209, 2, 12);
  rect(258, 209, 2, 12);
  rect(242, 206, 20, 5);
  //stairs
  strokeWeight(1);
  rect(390, 215, 90, 15);
  rect(400, 200, 80, 15);
  rect(410, 185, 70, 15);
  rect(420, 170, 60, 15);
  rect(430, 155, 50, 15);
  rect(440, 140, 40, 15);
  rect(450, 125, 30, 15);
  rect(460, 110, 20, 15);
  rect(465, 99, 15, 11);
  //painting
  fill(47, 79, 79);
  rect(285, 140, 40, 30);
  fill(0);
  strokeWeight(0);
  rect(300, 148, 8, 15);
  fill(255, 255, 255);
  rect(302, 154, 5, 5);
  rect(302, 150, 5, 7);
  fill("red");
  rect(302, 158, 6, 12);
  fill(0);
  rect(305, 152, 2, 2);
  rect(302, 152, 2, 2);
}
