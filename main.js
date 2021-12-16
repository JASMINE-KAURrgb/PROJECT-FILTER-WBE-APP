function preload(){
    mustache=loadImage("mustache.png");
}
        var nose_x=0;
        var nose_y=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(590,400);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('model loaded');
}

function draw(){
    image(video,0,0,300,300);
   image(mustache,nose_x,nose_y,40,40);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-25;
        nose_y=results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
    
}
function take_snapshot(){
    save("mustache.png");
}