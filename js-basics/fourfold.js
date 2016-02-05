/*
Write a program to draw a square 200 pixels by 200 pixels that looks like this square with colors red (red value 255), green (green value 255), blue (blue value 255) and magenta (red value 255 and blue value 255). All other RGB values are set to 0.

Numbering of the tiles.
0   1
2   3

*/

var image = new SimpleImage(200,200);

function paintRed(pixel){
    pixel.setRed(255);
    pixel.setBlue(0);
    pixel.setGreen(0);
}
function paintGreen(pixel){
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(255);
}
function paintPurple(pixel){
    pixel.setRed(255);
    pixel.setBlue(255);
    pixel.setGreen(0);
}
function paintBlue(pixel){
    pixel.setRed(0);
    pixel.setBlue(255);
    pixel.setGreen(0);
}

function imageTile(pixel, image) {
    var x = pixel.getX();
    var y = pixel.getY();
    var w = image.getWidth();
    var h = image.getHeight();

    if (x<w/2) {
        if (y<h/2) return 0;
        else return 2;
    }
    else {
        if (y<h/2) return 1;
        else return 3;
    }
}

for (var pixel of image.values()) {
    switch(imageTile(pixel, image)) {
        case 0: paintRed(pixel);
        break;
        case 1: paintGreen(pixel);
        break;
        case 2: paintPurple(pixel);
        break;
        default: paintBlue(pixel);
    }
}


print(image);
