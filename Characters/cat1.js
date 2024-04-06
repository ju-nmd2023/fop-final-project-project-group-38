function setup(){
  
    createCanvas(500,500);

}
function draw(){
    background(12);

    //CAT
    fill('grey');
    strokeWeight(0);
    //face
    rect(200,184,15,10);
    rect(198,187,3,4);
    rect(214,187,3,4);
    //ears
    rect(200,179,4,6);
    rect(210,179,4,6);
    fill('white');
    rect(211,180,2,3);
    rect(201,180,2,3);
    //body
    fill('grey');
    rect(204,194,20,10);
//legs
rect(204,200,3,10);
rect(208,200,3,10);
rect(217,200,3,10);
rect(221,200,3,10);
//tail
rect(223,194,4,2);
rect(226,192,3,2);
rect(228,190,3,2);
fill('white');
rect(229,189,2,2);
//nose
fill(0);
rect(206,189,2,2);
//eyes
rect(203,187,2,2);
rect(209,187,2,2);
    //mouth
    rect(205,191,1,1);
    rect(208,191,1,1);
}