noseX=0;
noseY=0;
function preload() {
  clown=loadImage('https://i.postimg.cc/ncgRN2Ng/moustache-PNG8.png');
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log("started");
  }
  
  function gotPoses(results) {
    if (results.length > 0) {
      console.log(results);

      noseX=results[0].pose.nose.x-35;
      noseY=results[0].pose.nose.y+0;
      console.log("nose x=" + noseX);
      console.log("nose y=" + noseY);
    }
  }
    

function draw(){
    image(video,0,0,300,300);
    image(clown,noseX,noseY,70,30);
}

function take_snapshot(){
    save("my_picture.png");
}