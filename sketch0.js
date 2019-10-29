
function preload(){
  // put preload code here
}
var startingFrame;
function setup() {

  createCanvas(windowWidth,windowHeight);
  // background("yellow");

  var myUrl = new URL (window.location.href);
  startingFrame = myUrl.searchParams.get("startFrame")*1




  // put setup code here
}

function draw() {
background("yellow");
  fill("red");
  textFont("staatliches");
  textSize(180);
  text (startingFrame+frameCount, 70, 200);
  textSize(80);
  text ("are you on time?", 70, 70);
  // put drawing code here
}
function mouseClicked() {
  window.open("index.html?startFrame="+(startingFrame+frameCount), "_self");
}
