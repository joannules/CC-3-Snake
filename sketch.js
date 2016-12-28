var s;
var scl = 20;
var food;

function setup() {
    canvas = createCanvas(floor(650/scl)*scl, floor(450/scl)*scl);
    canvas.parent('sketch_holder');
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function draw() {
    background(60);
    s.death();
    s.update();
    s.show();
    if (s.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 60);
    rect(food.x, food.y, scl, scl);

}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(scl*floor(random(cols)), scl*floor(random(rows)));
}


function keyPressed() {
    if (keyCode === UP_ARROW && s.yspeed != 1) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW && s.yspeed != -1) {
        s.dir(0, 1);
    } else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
        s.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
        s.dir(1, 0);
    }
}
