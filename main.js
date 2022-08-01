var nose_x = 0;
var nose_y = 0;
var w = 1, h = 1, x = 1, y = 1;
var img, img_dog, img_clown, img_filter;
function preload() { 
    img_clown = loadImage('Images/Clown.png');
    img_dog = loadImage('Images/Dog.png');
    img_mustache = loadImage('Images/Mustache.png');
    img_lipstick = loadImage('Images/Lipstick.png');
    img_sunglasses = loadImage('Images/Sunglasses.png')
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(475, 250);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

var tint_colour = "";
function draw() {
    const flippedVideo = ml5.flipImage(video);
    //image(flippedVideo, 0, 0, width, height);
    image(flippedVideo, 0, 0, 500, 400);
    tint(tint_colour);
    if(img_filter == "clown") {
        image(img_clown, x + 30, y - 10, w, h);
    }
    if (img_filter == "mustache") {
        image(img_mustache, x - 5, y, w, h);
    }
    if (img_filter == "lipstick") {
        image(img_lipstick, x - 20, y + 30, w, h);
    }
    if (img_filter == "sunglasses") {
        image(img_sunglasses, x + 5, y - 20, w, h);
    }
    if (img_filter == "dog") {
        image(img_dog, x - 250, y - 130, w, h);
    }
}

function take_snapshot() {
    save("my_filter_image.png");
}

function modelLoaded() {
    console.log("PoseNet is initialized.");
}

function gotPoses(results) {
    console.log(results);
    if (img_filter == "clown") {
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
    }
    if (img_filter == "mustache") {
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
    }
    if (img_filter == "lipstick") {
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
    }
    if (img_filter == "sunglasses") {
        x = results[0].pose.leftEye.x
        y = results[0].pose.leftEye.y
    }
    if (img_filter == "dog") {
        x = results[0].pose.rightEye.x;
        y = results[0].pose.rightEye.y;
    }
    console.log("filter x = " + x + ", filter y = " + y);
}

function set_filter1() {
    img_filter = "clown";
    w = 60;
    h = 60;
}

function set_filter2() {
    img_filter = "mustache";
    w = 200;
    h = 60;
}

function set_filter3() {
    img_filter = "lipstick";
    w = 130;
    h = 150;
}

function set_filter4() {
    img_filter = "sunglasses";
    w = 200;
    h = 70;
}

function set_filter5() {
    img_filter = "dog";
    w = 400;
    h = 300;  
}

function set_filter6() {
    tint_colour = document.getElementById("colour_name").value;
}