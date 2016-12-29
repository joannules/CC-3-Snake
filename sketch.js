var s;
var scl = 20;
var food;
var foods = [];
var img = [];

function setup() {
    canvas = createCanvas(floor(650 / scl) * scl, floor(450 / scl) * scl);
    canvas.parent('sketch_holder');
    loadTiosSexys();
    s = new Snake();
    frameRate(5);
    if (!s.avaricia) {
        food = pickLocation();
    } else {
        for (i = 0; i < 15; i++) {
            foods[i] = pickLocation();
        }
    }
}

function draw() {
    if (s.alive) {
        background(60);
        if (s.desconcetracio) {
            image(img[s.count], 0, 0);
        }
        background(60,50);
        s.death();
        s.update();
        s.show();
        if (!s.avaricia) {
            if (s.eat(food)) {
                food = pickLocation();
            }
            fill(255, 0, 60);
            rect(food.x, food.y, scl, scl);
        } else {
            for (i = 0; i < 15; i++) {
                if (s.eat(foods[i])) {
                    foods[i] = pickLocation();
                }
                fill(255, 0, 60);
                rect(foods[i].x, foods[i].y, scl, scl);
            }
        }
    } else {
        document.getElementById("header2").innerHTML = 'paverse matau';
    }
    document.getElementById("score").innerHTML = "Score:" + s.total*10;
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    posi = createVector(scl * floor(random(cols)), scl * floor(random(rows)));
    return posi;
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

function loadTiosSexys() {
    img[0] = loadImage("assets/a1.jpg");
    img[1] = loadImage("assets/a2.jpg");
    img[2] = loadImage("assets/a3.jpg");
    img[3] = loadImage("assets/a4.jpg");
    img[4] = loadImage("assets/a5.jpg");
    img[5] = loadImage("assets/a1.jpg");
    img[6] = loadImage("assets/a2.jpg");
    img[7] = loadImage("assets/a3.jpg");
    img[8] = loadImage("assets/a4.jpg");
    img[9] = loadImage("assets/a5.jpg");
    img[10] = loadImage("assets/a5.jpg");
    // img[0] = loadImage("assets/tia1.jpg");
    // img[1] = loadImage("assets/tia2.jpg");
    // img[2] = loadImage("assets/tia3.jpg");
    // img[3] = loadImage("assets/tia4.jpg");
    // img[4] = loadImage("assets/tia5.jpg");
    // img[5] = loadImage("assets/tia6.jpg");
    // img[6] = loadImage("assets/tia7.jpg");
    // img[7] = loadImage("assets/tia8.jpg");
    // img[8] = loadImage("assets/tia9.jpg");
    // img[9] = loadImage("assets/tia10.jpg");
    // img[10] = loadImage("assets/tio1.jpg");
    // img[11] = loadImage("assets/tio2.jpg");
    // img[12] = loadImage("assets/tio3.jpg");
    // img[13] = loadImage("assets/tio4.jpg");
    // img[14] = loadImage("assets/tio5.jpg");
    // img[15] = loadImage("assets/tio6.jpg");
    // img[16] = loadImage("assets/tio7.jpg");
    // img[17] = loadImage("assets/tio8.jpg");
    // img[18] = loadImage("assets/tio9.jpg");
    // img[19] = loadImage("assets/tio10.jpg");
    // img[20] = loadImage("assets/tio10.jpg");
    // img[21] = loadImage("assets/tio10.jpg");
}
