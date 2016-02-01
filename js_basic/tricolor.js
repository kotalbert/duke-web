/*
JavaScript program to modify an image to put three vertical stripes on an image—red on the left one third, green in the middle, and blue on the right one third.
*/
var img = new SimpleImage("hilton.jpg");

print(img);

//return in which vertical part  of the image is pixel located
//possible parts 0,1,2
function imagePart(image, pixel) {
    var w = image.getWidth();
    var frac = pixel.getX()/w;
    var part = 0.333;
    var ratio = frac/part;

    // should return 0,1,2
    // will return 3 for ratio=1, ie. x=width
    return Math.floor(ratio);
    
}

function changeImage(image) {

    for (var pixel of image.values()) {
        switch (imagePart(image,pixel)) {
            case 0:
            pixel.setRed(255);
            break;

            case 1:
            pixel.setGreen(255);
            break;

            default:
            pixel.setBlue(255);

        }
    }
    
}

changeImage(img);
print(img);
