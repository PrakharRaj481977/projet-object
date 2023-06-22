img="";
status="";
function setup(){
    canvas=createCanvas(380,380);
    video=createCapture(VIDEO);
    canvas.center();
    video.hide();

   
}

function preload(){
    img=loadImage('Bedroom.jpg');
}

function draw(){
    image(video,0,0,380,380);
    if(status  != ""){
        objectDetector.detect(video,gotResult);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status : Detecting objects";
            fill("#dbf705");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+ 15,objects[i].y+ 15);
            noFill();
            stroke("#dbf705")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    
}
function gotResult(error,result){
if(error){
    console.log(error);
}
console.log(result);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting objects";
}