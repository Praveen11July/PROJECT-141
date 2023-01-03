
x = "";
y="";
rightWrist = "";

function setup(){
var canvas =  createCanvas(600,500);
canvas.parent('canvas');

video = createCapture(VIDEO);
video.size(600, 500);


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses); 
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
  if (results.length>0) {
    x = results[0].pose.nose.x;
    rightWrist = results[0].pose.nose.x;
    
  }
}
function draw() {
  fill("#42f56c")
  stroke("#42f56c")
  circle(150,100,500)
  
}





