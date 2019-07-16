let red;
let white;
let color;

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    red = [255,0,0];
    white = [255, 255, 255];
    color = red;
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < 600 && mouseY > 0 && mouseY < 600 && color == red) {
        color = white;
    } else if (mouseX > 0 && mouseX < 600 && mouseY > 0 && mouseY < 600 && color == white) {
        color = red;
    }
}

function draw() {
    fill(color);
    square(0, 0, 600);
}

