
function preload(){
  // put preload code here
}


function setup() {

  createCanvas(windowWidth,windowHeight);
  background("black");

  var myUrl = new URL (window.location.href);
  startingFrame = myUrl.searchParams.get("startFrame")*1







  // put setup code here
}

function draw() {
  background(20);
    fill("yellow");
    textFont("staatliches");
    textSize(180);
    text (frameCount+ startingFrame, 70, 200);
    textSize(80);
    text ("are you on time?", 70, 70);
  // put drawing code here
}
function mouseClicked() {
  window.open("index0.html?startFrame=" +(startingFrame+ frameCount), "_self");
}
