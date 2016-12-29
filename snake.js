function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.alive = true;
    this.avaricia = false;
    this.alpha = 255;
    this.desconcetracio = false;
    this.count = 0;

    this.update = function() {

        if (this.total < 5) {
            this.mode1();
        } else if (this.total < 10) {
            this.mode3();
        } else if (this.total < 15) {
            this.mode2();
        } else if (this.total < 20) {
            this.mode4();
        } else if (this.total < 50) {
            this.mode5();
        } else if (this.total < 60) {
            this.mode6();
        } else if (this.total < 70) {
            this.mode7();
        } else {
            this.mode1();
        }

        if (this.total === this.tail.length) {
            this.tail[this.total] = createVector(this.x, this.y);
        } else {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
            this.tail[this.total] = createVector(this.x, this.y);
        }

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);


    }

    this.show = function() {
        fill(255, this.alpha);
        noStroke();
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);

        }

    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            if (this.invisibilitat) {
                this.alpha = this.alpha - 25;
            } else {
                this.alpha = 255;
            }
            if (this.desconcetracio) {
                this.count = this.count + 1;
            }
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
                this.alive = false;
            }
        }
    }

    this.mode1 = function() {
            document.getElementById("header2").innerHTML = 'Nivell 1 : Normal';
        }
        // mode 2 = atac epileptic
    this.mode2 = function() {
            document.getElementById("header2").innerHTML = 'Nivell 2 : L\'atac depilepsia';
            background(random(255), random(255), random(255));
        }
        // mode3 = La desconcentració
    this.mode3 = function() {
            document.getElementById("header2").innerHTML = 'Nivell 3 : La desconcetració';
            this.desconcetracio = true;
        }
        // mode4 = L'avaricia
    this.mode4 = function() {
            document.getElementById("header2").innerHTML = 'Nivell 4 : La gula';
            background(60);
            this.desconcetracio = false;
            if (!this.avaricia) {
                for (i = 0; i < 15; i++) {
                    foods[i] = pickLocation();
                }
            }
            this.avaricia = true;
        }
        // mode5 doble velocitat
    this.mode5 = function() {
            document.getElementById("header2").innerHTML = 'Nivell 5 : Exces de velocitat';
            this.avaricia = false;
            frameRate(20);
        }
        // mode6 invisibilitat
    this.mode6 = function() {
        document.getElementById("header2").innerHTML = 'Nivell 6 : Invisibilitat';
        frameRate(10);
        this.invisibilitat = true;
    }
     // desconcetracio2
    this.mode7 = function() {
      this.invisibilitat = false;
      document.getElementById("header2").innerHTML = 'Nivell 3 : La desconcetració';
      this.desconcetracio = true;
    }

    // la gran fartada
    // this.mode8 = function() {
    //     document.getElementById("header2").innerHTML = 'La gran fartada x3';
    //     this.invisibilitat = false;
    //     this.fartada = true;
    // }
}
