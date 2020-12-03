var hr;
var mn;
var sc,scAngle;

function setup() {
  createCanvas(500,500);
  
  
  
}

function draw() {
  background(0);
  angleMode(DEGREES);
  
  hr=hour();
  mn=minute();
  sc=second();

  console.log(hr,mn,sc)
  translate(250,250);
  rotate(-90)
 
  scAngle=map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  noFill();
  arc(0,0,185,185,270,hr-20,angleMode)
  pop();

  mnAngle=map(mn,0,60,0,360);
  push();
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  noFill();
  arc(0,0,125,125,270,hr-20);
  pop();
  hrAngle=map(hr%12,0,12,0,360)
  push();
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  noFill();
  arc(0,0,100,100,270,hr-20,angleMode)
 pop();
  drawSprites();
}