/*
Write a program to draw a red square that is 200 pixels by 200 pixels with this
black edge that is 20 pixels wide in the middle and has two diagonal corners
(imagine that if the diagonal lines kept going, they would meet in the center 
of the diagram). 
*/

// Constants for program

var MARGIN = 20;

function isUpperLeft(pixel) {
    var y = pixel.getY();
    if (y<=MARGIN) return true;
    return false;
}
function isLowerLeft(pixel, image) {
    var y = pixel.getY();
    var w = image.getWidth();
    if (w-y<=MARGIN) return true;
    return false;
}

function isLeftMargin(pixel) {
    var x = pixel.getX();
    if (x<= MARGIN) return true;
    return false;
}

function fillRed(pixel) {
    pixel.setRed(255);
    pixel.setBlue(0);
    pixel.setGreen(0);
}

function fillBlack(pixel) {
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
}

function fillUpperLeft(pixel) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x>y) fillRed(pixel);
    else fillBlack(pixel);
}

function fillLowerLeft(pixel, image) {
    var x = pixel.getX();
    var y = pixel.getY();
    var w = image.getWidth();
    if (w-y<x) fillRed(pixel);
    else fillBlack(pixel);
}

var image = new SimpleImage(200,200);

    for (var pixel of image.values()) {
        if (!isLeftMargin(pixel)) fillRed(pixel);
        else {
            if (isUpperLeft(pixel)) fillUpperLeft(pixel);
            else if (isLowerLeft(pixel, image)) fillLowerLeft(pixel, image);
            else fillBlack(pixel);
    } 

}

print(image);

