function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(150,150);
    canvas=createCanvas(550,500);
    canvas.position(750,150)


    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded()
{
    console.log("Model has been loaded!");
}


function draw(){
    background("teal")
}