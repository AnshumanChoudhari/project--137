img = "";
status = "";
object = "";
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700,500);
    video.hide();
}
function draw(){
    image(video, 0, 0, 700, 500);
    if(status !=""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult);
       for(i = 0; i<object.length; i++) {
           document.getElementById("status").innerHTML = "status : detected";
           document.getElementById("number_of_objects").innerHTML = "number of objects detected is :" + object.length;
           fill(r,g,b); 
           percent = floor(object[i].confidence*100);
           text(object[i].label+""+percent+"%",object[i].x +15, object[i].y +15);
           noFill();
    stroke(r,g,b);
    rect(object[i].x,object[i].y,object[i].width ,object[i].height);
       }
    }
}
function start(){
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status = true;
}
function gotResult(error, result){
console.log(error)
}