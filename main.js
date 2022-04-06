function preload(){
    img = loadImage("Frame.jpg");
}

function setup(){
    canvas = createCanvas(1100, 550);
    canvas.position(100, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(img, 10, 10, 1090, 530);
    image(video, 100, 100, 900, 350);

    fill(255, 0, 0);
    stroke(0, 0, 0);
    circle(0, 0, 50);

    fill(255, 0, 0);
    stroke(0, 0, 0);
    circle(1100, 0, 50);

    fill(255, 0, 0);
    stroke(0, 0, 0);
    circle(0, 550, 50);

    fill(255, 0, 0);
    stroke(0, 0, 0);
    circle(1100, 550, 50);

    fill(255, 255, 0);
    stroke(0, 0, 0);
    rect(10, -10, 1080, 20, 20);

    fill(255, 255, 0);
    stroke(0, 0, 0);
    rect(10, 540, 1080, 20, 20);
    
    fill(255, 255, 0);
    stroke(0, 0, 0);
    rect(1087, 10, 20, 530, 20);

    fill(255, 255, 0);
    stroke(0, 0, 0);
    rect(-10, 10, 20, 530, 20);
}

function take_snapshot(){
    save("framed_photo.png");
}
