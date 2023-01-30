/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


// // Pathlines
// let path = [];


// /**
// Description of setup
// */
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     for (let i = 0; i < 50; i++) {
//         path[i] = new Particle();
//     }

// }


// /**
// Description of draw()
// */
// function draw() {
//     background(35, 97, 180);
//     noStroke();
//     for (let i = 0; i < path.length; i++) {
//         path[i].moveDisplay();
//         print(path[i].x);

//     }


// beginLayer();
// background(100, 40);
// let angle = millis() / 1000;
// let x = map(cos(angle), -1, 1, 15, width - 15);
// let y = map(sin(1.4 * angle), -1, 1, 15, height - 15);
// fill(255, 204, 0);
// noStroke();
// ellipse(x, y, 25, 35);
// endLayer();

// translate(200, height - 200);
// rotate(millis() / 1000);
// }

// class Particle {
//     constructor() {
//         this.x = random(width);
//         this.y = random(height);
//         this.w = random(10, 25);
//         this.speed = 5;
//     }

//     moveDisplay() {
//         // background(255, 197, 252);
//         background(35, 97, 180);
//         beginLayer();
//         fill(255, 197, 252);
//         this.x += this.speed;
//         this.y += this.speed;
//         noStroke();
//         fill(255, 197, 252)
//         ellipse(this.x, this.y, this.w);
//         endLayer();

//         // this.x += random(this.speed);
//         // this.y += random(this.speed);
//         // ellipse(this.x, this.y, this.w, this.h);


//     }
// }

// // var opacity;


// function setup() {
//     createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//     drawingContext.lineWidth = 80;
//     drawingContext.lineCap = 'round'

//     gradientLine(drawingContext, 60, 60, 300, 380, 'pink', 'white')

// }

// function gradientLine(drawingContext, x1, y1, x2, y2, c1, c2) {
//     const gradient = drawingContext.createLinearGradient(x1, y1, x2, y2);
//     gradient.addColorStop(0, c1);
//     gradient.addColorStop(1, c2);
//     drawingContext.strokeStyle = gradient;

//     drawingContext.beginPath();
//     drawingContext.moveTo(x1, y1);
//     drawingContext.lineTo(x2, y2);
//     drawingContext.stroke();
// }



// function mouseDragged() {
//     opacity++;
//     colorMode(HSL, 360);
//     noStroke();
//     fill(0, 200, opacity);
//     ellipse(mouseX, mouseY, 50, 50);
// }



// Pathlines
let path = [];
let path2 = [];



/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 10; i++) {
        path[i] = new Particle();
    }
    for (let i = 0; i < 10; i++) {
        path2[i] = new Particle2();
    }

}


/**
Description of draw()
*/
function draw() {
    noStroke();
    for (let i = 0; i < path.length; i++) {
        path[i].moveDisplay();
        print(path[i].x);
    }
    for (let i = 0; i < path2.length; i++) {
        path2[i].moveDisplay();
        print(path2[i].x);
    }
}

class Particle {

    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.x2 = random(width);
        this.y2 = random(height);
        this.w = random(10, 25);
        this.speed = 2;
        this.lightness = 250;
        this.opacity = 360;
    }

    moveDisplay() {
        // background(255, 197, 252);
        background(35, 97, 180);
        beginLayer();
        fill(339, 15, 92);
        this.x += this.speed;
        this.y += this.speed;
        this.lightness++;    
        this.opacity--;
        colorMode(HSL, 360);
        noStroke();
        fill(339, 200, this.lightness, this.opacity); 
        // stroke(339, 200, this.lightness, this.opacity);
        // strokeCap(ROUND);
        // strokeWeight(4);
        // line(this.x, this.y, this.x2, this.y2);
        ellipse(this.x, this.y, this.w);
        endLayer();

    }

}

class Particle2 {

    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.x2 = random(width);
        this.y2 = random(height);
        this.w = random(10, 25);
        this.speed = 2;
        this.lightness = 250;
        this.opacity = 360;
    }

    moveDisplay() {
        background(35, 97, 180);
        beginLayer();
        fill(339, 15, 92);
        this.x += -this.speed;
        this.y += this.speed;
        this.lightness++;    
        this.opacity--;
        colorMode(HSL, 360);
        noStroke();
        fill(339, 200, this.lightness, this.opacity); 
        ellipse(this.x, this.y, this.w);
        endLayer();

    }

}

