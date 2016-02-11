function drawBorders(image, borderWidth) {

    for (var pixel of img.values()) {
        if (pixelOnEdge(pixel, image, borderWidth))
            setBlack(pixel);  
    }
}

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
}

function pixelOnEdge(pixel, image, borderWidth) {

    var x = pixel.getX();
    var y = pixel.getY();
    var w = image.getWidth();
    var h = image.getHeight();

    if (x < borderWidth) return true;
    else if (y < borderWidth) return true;
    else if (x > w-borderWidth) return true;
    else if (y > h-borderWidth) return true;
    return false;

}

var img = new SimpleImage("rodger.png");

drawBorders(img, 20);

print(img);


