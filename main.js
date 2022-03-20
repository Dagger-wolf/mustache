function preload(){



}

function setup(){

    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);

}

function draw(){



}

function take_snapshot(){

    save('ugotastache.png');

}

function modelLoaded(){

    console.log("posenet is initialised")

}

function gotposes(results){

    if(results.length > 0){

        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x + " nose y = " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

    }

}