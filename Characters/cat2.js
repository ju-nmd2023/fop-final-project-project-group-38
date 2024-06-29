function setup(){
  
    createCanvas(500,500);

}
function draw(){
    background(12);

    //CAT
    fill('orange');
    strokeWeight(0);
    //face
    rect(200,184,15,10);
    rect(198,187,3,4);
    rect(214,187,3,4);
    //ears
    rect(200,180,4,6);
    rect(210,180,4,6);
    fill('white');
    rect(211,180,2,3);
    rect(201,180,2,3);
    //body
    fill('orange');
    rect(204,194,20,10);
//legs
rect(204,200,3,10);
rect(208,200,3,10);
fill('white');
rect(217,203,3,7);
fill('orange');
rect(221,200,3,10);
//tail
rect(223,194,4,2);
rect(226,192,3,2);
rect(228,190,3,2);
fill('white');
rect(229,189,2,2);
//nose
fill('pink');
rect(206,189,2,2);
//eyes
fill('black');
rect(203,187,2,2);
rect(209,187,2,2);
    //mouth
    fill('pink');
    rect(205,191,1,1);
    rect(208,191,1,1);
}
