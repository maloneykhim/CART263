/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Sources used :
// - Colors changing (https://kellylougheed.medium.com/rainbow-paintbrush-in-p5-js-e452d5540b25)
// - Layers (https://osteele.github.io/p5.libs/p5.layers/)
// - Polar (https://github.com/liz-peng/p5.Polar)


// Particles
let path = [];
let path2 = [];
let love = [];





/**
Description of setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 1; i++) {
        path[i] = new Particle();
    }
    for (let i = 0; i < 1; i++) {
        path2[i] = new Particle2();
    }
    for (let i = 0; i < 1; i++) {
        love[i] = new Particle3();
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
        path2[i].moveDisplay2();
        print(path2[i].x);
    }

    for (let i = 0; i < love.length; i++) {
        love[i].flower();
        print(love[i].x);
    }

}

class Particle {

    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.w = random(10, 15);
        this.speed = 2;
        this.lightness = 250;
        this.opacity = 255;
    }

    moveDisplay() {
        colorMode(RGB, 255);
        background(35, 97, 200);
        beginLayer();
        this.x += this.speed;
        this.y += this.speed;
        this.lightness++;
        this.opacity = this.opacity - 2;
        colorMode(HSL, 360);
        noStroke();
        fill(339, 200, this.lightness, this.opacity);
        ellipse(this.x, this.y, this.w);
        if (this.opacity <= 0) {
            this.reset();
        }
        endLayer();

    }

    reset() {
        this.x = random(width);
        this.y = random(height);
        this.lightness = 250;
        this.opacity = random(255);
    }

}

class Particle2 {

    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.w = random(10, 15);
        this.speed = 2;
        this.lightness = 250;
        this.opacity = 255;
    }

    moveDisplay2() {
        colorMode(RGB, 255);
        background(35, 97, 200);

        beginLayer();
        // fill(339, 15, 92);
        this.x += -this.speed;
        this.y += this.speed;
        this.lightness++;
        this.opacity = this.opacity - 2;
        colorMode(HSL, 360);
        noStroke();
        fill(339, 200, this.lightness, this.opacity);
        ellipse(this.x, this.y, this.w);
        if (this.opacity <= 0) {
            this.reset();
        }
        endLayer();

    }

    reset() {
        this.x = random(width);
        this.y = random(height);
        this.lightness = 250;
        this.opacity = random(255);
    }

}

// class Particle2 {

//     constructor() {
//         this.x2 = random(width);
//         this.y2 = random(height);
//         this.diameter = 5;
//         this.maxdiameter = random(50, 1000);
//         this.opacity = 0;
//     }

//     grow() {
//         fill(255, 204, 0, 255);
//         this.diameter++;
//         ellipse(this.x2, this.y2, this.diameter);
//         if (this.diameter >= this.maxdiameter) {
//             noFill();
//             }
//     }

//     // disappear() {
//     //     fill(255, 204, 0, this.opacity);
//     // }
// }


class Particle3 {

    constructor() {
        this.number = random(6, 12);
        this.width = 30;
        this.height = 50;
        this.distance = random(30, 50);
        this.x3 = random(width);
        this.y3 = random(height);
        this.maxwidth = random(100, 500);
        this.opacity = 50;
    }

    flower() {
        noStroke();
        resetMatrix();
        setCenter(this.x3, this.y3);
        this.width++;
        this.height++;
        this.distance++;
        fill(167, 132, 229, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 5) * 15, this.height, this.distance);
        fill(230, 166, 203, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 10) * 50, this.height, this.distance);
        fill(223, 187, 140, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 15) * 10, this.height, this.distance);
        fill(178, 215, 178, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 20) * 5, this.height, this.distance);
        fill(238, 175, 170, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 10) * 30, this.height, this.distance);
        rotate(frameCount * -0.02);


        rotate(frameCount * 0.01);
        if (this.width >= this.maxwidth) {
            this.width--;
            this.height--;
            this.distance--;  
            this.opacity--;
        }

        if (this.opacity <= 0) {
            this.reset();
        }
        // fill(167, 132, 229, 155);
        // polarEllipses(12, 20 + sin(frameCount / 8) * 5, 20, 20);
        // fill(230, 166, 203, 110);
        // polarEllipses(8, 50 + sin(frameCount / 10) * 10, 50, 65);
        // rotate(frameCount * -0.02);
        // fill(223, 187, 140, 155);
        // polarEllipses(6, 10 + sin(frameCount / 20) * 10, 30, 40);
        // fill(178, 215, 178, 130);
        // polarEllipses(8, 5 + sin(frameCount / 20) * 5, 20, 50);
        // fill(238, 175, 170);
        // polarEllipses(12, 5, 8, 40);
    }

    reset() {
        this.x3 = random(width);
        this.y3 = random(height);
        this.number = random(6, 12);
        this.width = 30;
        this.height = 50;
        this.distance = random(30, 50);
        this.opacity = 50;
    }

}
