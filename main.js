var video = ""
var status = ""

function start(){
    console.log(video);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Object"
    
}
function draw(){
    image(video, 0, 0, 700, 500)
    if(status != ""){
        objectDetector.detect(video, gotResult)
    }
}
function setup(){
    video = createCapture(VIDEO)
    //video = createVideo("video.mp4")
    canvas = createCanvas(700, 500)
    canvas.center();
    video.hide();
}
function modelLoaded(){
    console.log("modelLoaded");
    status = true
    /*
    video.loop();
    video.volume(0);
    video.speed(1);
    */
}

function gotResult(error, result){
    console.log(result);
}

/*
var video = ""
var status = ""

function start(){
    console.log(video);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Object"
    
}
function draw(){
    image(video, 0, 0, 700, 500)
    if(status != ""){
        objectDetector.detect(video, gotResult)
    }
}
function setup(){
    video = createVideo("video.mp4")
    canvas = createCanvas(700, 500)
    canvas.center();
    video.hide();
}
function modelLoaded(){
    console.log("modelLoaded");
    status = true
    video.loop();
    video.volume(0);
    video.speed(1);
    
}
function gotResult(error, result){
    console.log(result);
}
*/
