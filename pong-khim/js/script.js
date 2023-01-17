/**
Pong Game
Maloney Khim

Inspiration from those links below:
- https://editor.p5js.org/kellylougheed/sketches/B1BVsg9Af
- https://editor.p5js.org/Viv-Galinari/sketches/SJncLkliW
- https://kellylougheed.medium.com/javascript-pong-with-p5-js-3ae1b859418c
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


var ballX = Math.floor(Math.random() * 300) + 50; // variable for the horizontal position of the ball
var ballY = 50; // variable for the vertical position of the ball
var ballD = 40; // variable for the diameter of the ball
var ballXMove = 5; // variable for the horizontal moving speed of the ball
var ballYMove = 5; // variable for the vertical moving speed of the ball

var paddleX1 = 50; // variable for the horizontal position of the left paddle
var paddleY1 = 225; // variable for the vertical position of the left paddle
var paddleW1 = 10; // variable for the width of the left paddle
var paddleH1 = 100; // variable for the height position of the left paddle

var paddleX2 = 640; // variable for the horizontal position of the right paddle
var paddleY2 = 225; // variable for the vertical position of the right paddle
var paddleW2 = 10; // variable for the width of the right paddle
var paddleH2 = 100; // variable for the height of the right paddle


var player1; // variable for the player at the left
var player2; // variable for the player at the right

/**
Description of setup
*/
function setup() {
    createCanvas(700, 500); // create a canvas of 700x500 pixel large

}


/**
Description of draw()
*/

function draw() {
    background(91, 46, 83); // make the background purple

    stroke(255); // make the stroke white
    strokeWeight(3); // give the stroke a width of 3px
    line(width / 2, 0, width / 2, height); // add a line in the middle of the canvas

    ballX += ballXMove; // horizontal movement of the ball
    ballY += ballYMove; // vertical movement of the ball
    if (ballX < ballD / 2 ||
        ballX > 700 - 0.5 * ballD) {
        ballXMove *= -1;
    } // if the ball hit the wall, change horizontal direction
    if (ballY < ballD / 2 ||
        ballY > 500 - ballD) {
        ballYMove *= -1;
    } // if the ball hit the wall, change vertical direction


    fill(438, 172, 37); // make the ball orange
    noStroke(); // remove the stroke for the ball
    ellipse(ballX, ballY, ballD, ballD); // create a ball on the canvas



    fill(255); // make the paddles white
    rect(paddleX1, paddleY1, paddleW1, paddleH1); // paddle of the left player
    rect(paddleX2, paddleY2, paddleW2, paddleH2); // paddle of the right player


    if (keyIsPressed) {
        if (keyCode == UP_ARROW) {
            paddleY1 -= 5;
        } else if (keyCode == DOWN_ARROW) {
            paddleY1 += 5;
        }
    } // for the left player, if the up arrow key is pressed, make the paddle go up, if the down arrow key is pressed, make the paddle go down

    if (keyIsPressed) {
        if (key == 'w') {
            paddleY2 -= 5;
        } else if (key == 's') {
            paddleY2 += 5;
        }
    } // for the right player, if the w key is pressed, make the paddle go up, if the s key is pressed, make the paddle go down

}
