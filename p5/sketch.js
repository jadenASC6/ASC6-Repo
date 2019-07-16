let x;
let y;

function setup() {
    createCanvas(500, 500);
    background(150, 200, 200);
    console.log('Canvas is setup')
    x = 0;
    y = 0;
}

function draw() {
    x++;
    y++;
}

function mousePressed() {
    circle(mouseX, mouseY, Math.floor(Math.random()*250));
}