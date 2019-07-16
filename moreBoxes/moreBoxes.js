let blue;
let red;
let color;

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    blue = [0, 25, 250];
    red = [250, 0, 0];
    color = blue;
    color2 = blue;
}

function draw() {
    fill(color);
    rect(0, 0, 300, 600);
    fill(color2);
    rect(300, 0, 300, 600);
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 600 && color == blue) {
        color = red;
    } else if (mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 600 && color == red) {
        color = blue;
    }
    if (mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 600 && color2 == blue) {
        color2 = red;
    } else if (mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 600 && color2 == red) {
        color2 = blue;
    }
}