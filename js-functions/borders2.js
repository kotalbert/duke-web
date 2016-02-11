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

function pixelOnHorizontalEdge(pixel, image, borderWidth) {

    var y = pixel.getY();
    var h = image.getHeight();

    if (y < borderWidth) return true;
    else if (y > h-borderWidth) return true;
    return false;

}

function pixelOnVerticalEdge(pixel,image, borderWidth) {

    var x = pixel.getX();
    var w = image.getWidth();

    if (x < borderWidth) return true;
    else if (x > w-borderWidth) return true;
    return false;

}

function drawDiffBorders(image, borderWidth) {
    for (var pixel of img.values()) {
        if (pixelOnVerticalEdge(pixel, image, borderWidth))
            setBlack(pixel);
        else if (pixelOnHorizontalEdge(pixel,image, borderWidth*3))
            setBlack(pixel);
    }

var img = new SimpleImage("rodger.png");

drawDiffBorders(img, 20);

print(img);


