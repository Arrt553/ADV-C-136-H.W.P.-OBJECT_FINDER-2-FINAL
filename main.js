var status = "";
function setup(){
    canvas = createCanvas(300,300);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object(s)";
    text_in_input = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
}
function draw(){
    image(video,0,0,380,380);
}
function preload(){

}


 