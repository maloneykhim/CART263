/**
Particles With Personalities
Maloney Khim

My prompt was 'Looking for love', so I decided to make two types of particles. The first one is a gradient line that represents
the life path that an individual follow. As they cross the screen, these paths sometimes meet each other and make love blooms. 
Love is represented by a particle that ressembles a growing flower/mandala. This particle's pulsating motion reminds us of a heartbeat,
which is also associated with the emotion of love. Relationships can be short-term or long-term, which is represented in the way that
the particles can grow for a shorter or a longer time before fading out.*/

"use strict";

// Sources used :
// - Colors changing (https://kellylougheed.medium.com/rainbow-paintbrush-in-p5-js-e452d5540b25)
// - Layers (https://osteele.github.io/p5.libs/p5.layers/)
// - Polar (https://github.com/liz-peng/p5.Polar)
// - Watercolor texture (https://fr.freepik.com/photos-gratuite/fond-texture-aquarelle-violet-rose_4750952.htm)
// - Music (https://youtu.be/gl56oKq2Z0s)


// Particle arrays
let path = [];
let path2 = [];
let love = [];

// Files variables
let img;
let music;


/**
Preload image & SOund
*/

function preload() {
    img = loadImage('watercolor-texture.png');
    music = loadSound('music.mp3');

}


/**
Setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight - 20); // Create a canvas with borders on the top and bottom of the page
    music.play(); // Let the music play

    for (let i = 0; i < 1; i++) {
        path[i] = new Particle();
    } // For loop for the particle of the path that goes to the right

    for (let i = 0; i < 1; i++) {
        path2[i] = new Particle2();
    } // For loop for the particle of the path that goes to the left

    for (let i = 0; i < 2; i++) {
        love[i] = new Particle3();
    } // For loop for the particle of love that grows and disappear

}


/**
Draw
*/
function draw() {
    noStroke(); // Remove the stroke

    for (let i = 0; i < path.length; i++) {
        path[i].moveDisplay();
        print(path[i].x);
    } // Give a class to describe all particles of path

    for (let i = 0; i < path2.length; i++) {
        path2[i].moveDisplay2();
        print(path2[i].x);
    } // Give a class to describe all particles of path2

    for (let i = 0; i < love.length; i++) {
        love[i].flower();
        print(love[i].x);
    } // Give a class to describe all particles of love



}


/**
Path 1 - Particle Class
*/

class Particle {

    constructor() {
        this.x = random(width); // Random X position
        this.y = random(height); // Random Y position
        this.w = random(10, 15); // Random circle width
        this.speed = 2; // Speed of 2
        this.saturation = 250; // Saturation of 250
        this.opacity = 255; // Opacity of 255
    }

    moveDisplay() {
        colorMode(RGB, 255); // RGB color mode
        background(120, 124, 218); // Light purple background color
        image(img, 0, 0); // Add texture to background

        beginLayer(); // Start of layering of circles to form a line
        this.x += this.speed; // Horizontal speed of 2 that goes to the right
        this.y += this.speed; // Vertical speed of 2 that goes down
        this.saturation++; // Saturation goes down as line gets drawn
        this.opacity = this.opacity - 2; // Opacity goes down as line gets drawn
        colorMode(HSL, 360); // HSL color mode
        noStroke(); // Remove stroke
        fill(339, 200, this.saturation, this.opacity); // Fill the line in a pink-white gradient that gradually becomes transparent as it gets drawn
        ellipse(this.x, this.y, this.w); // Draw circle at random position of random width

        if (this.opacity <= 0) {
            this.reset();
        } // If the opacity of the line reaches 0, make new particles appear
        endLayer(); // End of layering of circles to form a line

    }

    reset() {
        this.x = random(width); // Reset new X position
        this.y = random(height); // Reset new Y position
        this.saturation = 250; // Reset the saturation
        this.opacity = random(255); // Reset a random opacity
    }

}


/**
Path 2 - Particle Class
*/

class Particle2 { // Essentially the same code as the first particle, except the line goes toward the left

    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.w = random(10, 15);
        this.speed = 2;
        this.saturation = 250;
        this.opacity = 255;
    }

    moveDisplay2() {
        colorMode(RGB, 255);
        background(120, 124, 218);
        image(img, 0, 0);


        beginLayer();
        this.x += -this.speed; // Horizontal speed of -2, which makes it go to the opposite side (the right side)
        this.y += this.speed;
        this.saturation++;
        this.opacity = this.opacity - 2;
        colorMode(HSL, 360);
        noStroke();
        fill(339, 200, this.saturation, this.opacity);
        ellipse(this.x, this.y, this.w);
        if (this.opacity <= 0) {
            this.reset();
        }
        endLayer();

    }

    reset() {
        this.x = random(width);
        this.y = random(height);
        this.saturation = 250;
        this.opacity = random(255);
    }

}

/**
Love - Particle Class
*/

class Particle3 {

    constructor() {
        this.number = random(6, 12); // Random number of ellipses
        this.width = random(25, 30); // Random width of ellipses
        this.height = random(45, 50); // Random height of ellipses
        this.distance = random(30, 50); // Random distance of ellipses
        this.x3 = random(width); // Random X position of love particle
        this.y3 = random(height); // Random Y position of love particle
        this.maxwidth = random(50, 300); // Random max width of love particle
        this.opacity = 50; // Opacity of 50
    }

    flower() { // Method for the love particle (using the Polar Library, it creates a circular geometric pattern)
        noStroke(); // Remove the stroke
        resetMatrix(); // Replace the current matrix before setting new center
        setCenter(this.x3, this.y3); // Set the center point of the love particle
        this.width++; // Width of ellipse goes up as time goes
        this.height++; // Height of ellipse goes up as time goes
        this.distance++; // Distance of ellipse goes up as time goes
        fill(167, 132, 229, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 5) * 15, this.height, this.distance); // Draw ellipse with oscillation animation
        fill(230, 166, 203, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 10) * 50, this.height, this.distance); // Draw ellipse with oscillation animation
        fill(223, 187, 140, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 15) * 10, this.height, this.distance); // Draw ellipse with oscillation animation
        fill(178, 215, 178, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 20) * 5, this.height, this.distance); // Draw ellipse with oscillation animation
        fill(238, 175, 170, this.opacity);
        polarEllipses(this.number, this.width + sin(frameCount / 10) * 30, this.height, this.distance); // Draw ellipse with oscillation animation


        
        if (this.width >= this.maxwidth) { // If the particle reach the max ellipse width, make it get smaller and then disappear
            this.width--;
            this.height--;
            this.distance--;
            this.opacity--;
        }

        if (this.opacity <= 0) { // If the opacity of the particle reaches 0, make a new one appear
            this.reset();
        }
    }

    reset() {
        this.x3 = random(width); // Reset random X position of the center of the particle
        this.y3 = random(height); // Reset random Y position of the center of the particle
        this.number = random(6, 12); // Reset random ellipse number
        this.width = random(25, 30); // Reset random ellipse width
        this.height = random(45, 50); // Reset random ellipse height
        this.distance = random(30, 50); // Reset random distance
        this.opacity = 50; // Reset opacity to 50
    }

}
