let img;
var globalZ = 0;
let array = []
let imgSelect = -1;


function setup() {
    var canvas = createCanvas(window.innerWidth / 2, window.innerHeight);
    canvas.parent("sketch-holder")

}
function windowResized() {
    resizeCanvas(windowWidth / 2, windowHeight);
}

function draw() {
    background(255);

    for(let i = 0; i < array.length; i++) {
        image(array[i]["img"], array[i]["x"],array[i]["y"])
    }

}

function addImg(num) {
    let img = loadImage('assets/' + num + ".jpg");
    array.push({"img":img, "x":random(0,window.innerWidth  / 2 - 250), "y":random(0,window.height - 200), "z":globalZ})
    globalZ++;
}

function checkCollision() {
    let max = 0;
    let imgInd = -1;


    for(let i = 0; i < array.length; i++) {

        if (
            mouseX > array[i]["x"]  &&
            mouseX < array[i]["x"] + array[i]["img"].width &&
            mouseY > array[i]["y"]  &&
            mouseY < array[i]["y"] + array[i]["img"].height
        ) {
            let z = array[i]["z"];
            if(z >= max) {
                max = z;
                imgInd = i
            }
        }

    }
    // if(imgInd >= 0) {
    //     array[imgInd]["z"] = globalZ;
    //     globalZ++;
    // }
    return imgInd;

}

function mousePressed() {
    imgSelect = checkCollision();
}

function mouseDragged() {
    if(imgSelect >= 0) {
        array[imgSelect]["x"] = mouseX;
        array[imgSelect]["y"] = mouseY;
    }
}

function mouseReleased() {
    imgSelect = -1;
}
