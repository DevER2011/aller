noseX = 0;
noseY = 0;
difference = 0;
left_wristX = 0;
right_wristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(560,500);
canvas.position(560, 150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized you won round 1");
}
function gotPoses(results){
if(results.length > 0)
{ 
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    right_wristX = results[0].pose.rightWrist.x;
    left_wristX = results[0].pose.leftWrist.x;
    difference = floor(left_wristX - right_wristX);
    
    console.log("Right wristX =" + right_wristX + "Left wristX =" + left_wristX + "Difference =" +difference);
    console.log("noseX =" + noseX + "noseY =" + noseY);
}
}
function draw(){
background("#808080");
fill("#FF0000");
stroke("#0000FF");
circle(noseX, noseY, difference)
document.getElementById("square_sides").innerHTML = "Width and Height of the name will be" + difference + "px";
}