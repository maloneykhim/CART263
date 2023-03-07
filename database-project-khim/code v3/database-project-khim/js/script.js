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

function preload() {
    table = loadTable("assets/ufo-database-v2.csv", "csv", "header");
    myFont = loadFont('assets/clockwiselight.otf');
} // Preload the database


/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); // Canvas takes the size of the screen

    // Midnight sky background gradient
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
        this.size = map(this.minute, 0, 58, 0, 75); // Re-maps the minute numbers from one range to another
        this.strokeWidth = map(this.hour, 0, 23, 0, 5); // Re-maps the hour numbers from one range to another
        this.buildingWidth = map(this.day, 12, 20, 30, 80); // Re-maps the day numbers from one range to another
        this.buildingHeight = map(this.day, 12, 20, 50, 300); // Re-maps the day numbers from one range to another

    }

    drawBuilding(){ // Draw rectangles representing the buildings of a city, their height and width are based on the day the UFOs were seen
        rectMode(CENTER); // Change the rectangle mode to center
        fill('#535E6B'); // Make the rectangles grey 
        strokeWeight(3); // Change the stroke weight to 3
        rect(this.x, (windowHeight), this.buildingWidth, this.buildingHeight); // Draw buildings with its size having variations depending on the day the UFO was seen
    }

    drawUFO() { // Draw UFOs with different size depending on the minute they were seen and different colors depending on their shapes
        noStroke(); // Remove the stroke
        if (this.shape === 'Triangle' || this.shape === 'Diamond' || this.shape === 'Cross') { // If the UFO's shape is triangle, diamond or cross...
            fill('#0BFFED'); // Fill the following ellipses in this color
            ellipse(this.x, this.y, this.size, (this.size / 4)); // Top part of the ufo
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2)))); // Bottom part of the ufo
        } else if (this.shape === 'Circle' || this.shape === 'Sphere' || this.shape === 'Oval' || this.shape === 'Disk') { // Else if the UFO's shape is circle, sphere, oval or disk...
            fill('#00FFAF'); // Fill the following ellipses in this color
            ellipse(this.x, this.y, this.size, (this.size / 4)); // Top part of the ufo
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2)))); // Bottom part of the ufo
        } else if (this.shape === 'Light' || this.shape === 'Fireball' || this.shape === 'Cigar') { // Else if the UFO's shape is light, fireball, or cigar...
            fill('#ABFFE3'); // Fill the following ellipses in this color
            ellipse(this.x, this.y, this.size, (this.size / 4)); // Top part of the ufo
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2)))); // Bottom part of the ufo
        } else if (this.shape === 'Teardrop' || this.shape === 'Formation' || this.shape === 'Changing') { // Else if the UFO's shape is teardrop, formation, or changing...
            fill('#0EAAA9'); // Fill the following ellipses in this color
            ellipse(this.x, this.y, this.size, (this.size / 4)); // Top part of the ufo
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2)))); // Bottom part of the ufo
        } else { // if the UFO is not any of those shapes...
            fill('#1FD7C4'); // Fill the following ellipses in this color
            ellipse(this.x, this.y, this.size, (this.size / 4)); // Top part of the ufo
            ellipse(this.x, (this.y - (this.size * 0.08)), ((this.size / 4) + (0.25 * (this.size / 2)))); // Bottom part of the ufo
        }
    }


    drawCircle() {
        colorMode(HSB, 1);
        stroke(0, 0, 100, 0.5);
        strokeWeight(this.strokeWidth);
        noFill();
        drawingContext.setLineDash([5, 10, 30, 10]); // Create a dashed line pattern
        ellipse(this.x, this.y, this.ID, this.ID); // Draw circles across the canvas
    }

    addInfo() {
        textFont(myFont); // Change the font to Clockwise Light
        textSize(12); // Change the font size to 12
        fill('#white'); // Make text white
        noStroke(); // Remove the stroke
        text(this.ID, this.x - 10, this.y + 10); // Write ID number
        textSize(10);
        text(this.city, this.x - 10, this.y + 25); // Write city
        drawingContext.shadowBlur = 12; // Add a glow effect
        drawingContext.shadowColor = color(255); // Make glow effect white
    }

}


/**
Description of draw()
*/
function draw() {

}
