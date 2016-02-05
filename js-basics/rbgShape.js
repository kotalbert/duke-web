/*
Write a program to draw a square 200 pixels by 200 pixels that looks like the square below with colors red (red value 255), green (green value 255), and blue (blue value 255). All other RGB values are set to 0. 

0   1   2
3   4   5
6   7   8

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
function paintBlue(pixel){
    pixel.setRed(0);
    pixel.setBlue(255);
    pixel.setGreen(0);
}

function imageTile(pixel, image) {
    var x=pixel.getX();
    var y=pixel.getY();
    var w=image.getWidth();
    var h=image.getHeight();
    
    var xGrid = Math.floor(x/(w/3));
    var yGrid = Math.floor(y/(h/3));

    return xGrid+3*yGrid;

}

for (var pixel of image.values()) {
    switch (imageTile(pixel, image)) {
        case 0:
        case 1:
        case 2:
        case 3: paintRed(pixel);
        break;
        case 4:
        case 5: paintGreen(pixel);
        break;
        default: paintBlue(pixel);
    }
}

print(image);
