/**
Data Visualisation Project
Maloney Khim

Database used : National UFO Reporting Center Reports(modified) https://data.world/khturner/national-ufo-reporting-center-reports/workspace/file?filename=nuforc_events.csv
Libraries used: p5.speech https://idmnyu.github.io/p5.js-speech/
UFO shape inspiration : https://editor.p5js.org/ray.toal/sketches/MX7qvtpCO
Glow effect : https://youtu.be/iIWH3IUYHzM
Gradient background : https://youtu.be/EAY7S1tWbzc
Font used : https://www.cufonfonts.com/font/clockwise 


*/

let table; // Variable for the table

let ufo = []; // UFO Particle Array

let topColor, bottomColor; // Variable for the gradient colors

let myFont; // Variable for the font

var speech = new p5.Speech(); //

function preload() {
    table = loadTable("assets/ufo-database-v2.csv", "csv", "header");
    myFont = loadFont('assets/clockwiselight.otf');
}


/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); // Canvas takes the size of the screen

    // Midnight sky background
    topColor = color('#27274B');
    bottomColor = color('#111232')
    for (let y = 0; y < height; y++) {
        n = map(y, 0, height, 0, 1);
        let newColor = lerpColor(topColor, bottomColor, n);
        stroke(newColor);
        line(0, y, width, y);
    }


    textAlign(CENTER); // Align text in the center


    for (var r = 0; r < table.getRowCount(); r++) { // Cycle through each row of the table

        ufo[r] = new Particle(
            table.getString(r, "ID"),
            table.getString(r, "Day"),
            table.getString(r, "Hour"),
            table.getString(r, "Minute"),
            table.getString(r, "City"),
            table.getString(r, "Shape"),
            table.getString(r, "Summary"));
        ufo[r].drawUFO();
        ufo[r].drawBuilding();
        ufo[r].drawCircle();
        ufo[r].addInfo();
    }

}

class Particle {
    constructor(ID, day, hour, minute, city, shape, summary) { // Add each data point to the object
        this.ID = ID;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.city = city;
        this.shape = shape;
        this.summary = summary;
        this.x = random(width);
        this.y = random(height);
        this.size = map(this.minute, 0, 58, 0, 75);
        this.strokeWidth = map(this.hour, 0, 23, 0, 5);
        this.buildingWidth = map(this.day, 12, 20, 30, 80);
        this.buildingHeight = map(this.day, 12, 20, 50, 300);

    }

    drawBuilding(){
        rectMode(CENTER);
        fill('#535E6B');
        strokeWeight(3);
        rect(this.x, (windowHeight), this.buildingWidth, this.buildingHeight);
    }

    drawUFO() {
        noStroke();
        if (this.shape === 'Triangle' || this.shape === 'Diamond' || this.shape === 'Cross') {
            fill('#0BFFED');
            ellipse(this.x, this.y, this.size, (this.size / 4));
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2))));
            line(this.x, this.y, this.strokeWidth, 10);
        } else if (this.shape === 'Circle' || this.shape === 'Sphere' || this.shape === 'Oval' || this.shape === 'Disk') {
            fill('#00FFAF');
            ellipse(this.x, this.y, this.size, (this.size / 4));
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2))));
        } else if (this.shape === 'Light' || this.shape === 'Fireball' || this.shape === 'Cigar') {
            fill('#ABFFE3');
            ellipse(this.x, this.y, this.size, (this.size / 4));
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2))));
        } else if (this.shape === 'Teardrop' || this.shape === 'Formation' || this.shape === 'Changing') {
            fill('#0EAAA9');
            ellipse(this.x, this.y, this.size, (this.size / 4));
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2))));
        } else {
            fill('#1FD7C4');
            ellipse(this.x, this.y, this.size, (this.size / 4));
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2))));
        }
    }


    drawCircle() {
        colorMode(HSB, 1);
        stroke(0, 0, 100, 0.5);
        strokeWeight(this.strokeWidth);
        noFill();
        drawingContext.setLineDash([5, 10, 30, 10]); // Create a dashed line pattern
        ellipse(this.x, this.y, this.ID, this.ID);
    }

    addInfo() {
        textFont(myFont);
        textSize(12);
        fill('#white');
        noStroke();
        text(this.ID, this.x - 10, this.y + 10);
        textSize(10);
        text(this.city, this.x - 10, this.y + 25);
        drawingContext.shadowBlur = 12; // Add a glow effect
        drawingContext.shadowColor = color(255); // Make glow effect white
    }

}


/**
Description of draw()
*/
function draw() {

}
