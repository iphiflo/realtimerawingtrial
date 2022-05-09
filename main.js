noseX = 0;
noseY = 0;

difference = 0;

right_wristX = 0;
left_wristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas=createCanvas(550, 500);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    document.getElementById("square_sides").innerHTML = "width & height of the square will be " +difference+" px";
    fill("#ed91b9");
    stroke("#9c104c");
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log("poseNet is Initialised");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+ " noseY = "+noseY);

        right_wristX = results[0].pose.right_wrist.x;
        left_wristX = results[0].pose.left_wrist.x;
        difference = floor(left_wristX-right_wristX);
        
        console.log("left_wristX = "+left_wristX+ " right_wristX = "+right_wristX);
        console.log("difference = " +difference);

    }

    
}

