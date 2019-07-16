let x = 50;
let y = 50;
let a = Math.floor(Math.random()*11 + 1);
let speed2 = Math.floor(Math.random() *11 + 1)
function setup() {
    createCanvas(500,500);
    background(0, 0, 0);
}

function draw() {
    background(0, 0, 0);
    // if (x == 0 && y == 0) {
    //     fill(255, 0, 0);
    // } else if (x == 450 && y == 450) {
    //     fill(0, 184, 0);
    // }
    circle(x, y, 50);
    if (y >= 475 || y <= 25) { 
        a = -a;
    }
    if (x >= 475 || x <= 25) {
        speed2 = -speed2;
    }
    y += a;
    x += speed2;
}
