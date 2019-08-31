let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let imagen = new Image();
imagen.src = "banner.jpg";
imagen.onload = function (imagen) {
    myDrawImageMethod(this);
}
function myDrawImageMethod(imagen) {
    ctx.drawImage(imagen, 0, 0);
}

function getRed(imageData, x, y) {
    let index = (x + y + imageData.width) * 4;
    return imageData.data[index + 0];
}
function getGreen(imageData, x, y) {
    let index = (x + y + imageData.width) * 4;
    return imageData.data[index + 0];
}
function getBlue(imageData, x, y) {
    let index = (x + y + imageData.width) * 4;
    return imageData.data[index + 0];
}
let r = getRed;
let g = getGreen;
let b = getBlue;
let a = 255;
function filtroGris(imagen, r, g, b, a) {
    let gris= r*0.2126+g*0.7152+b*0.0722;
    for (let i = 0; i < canvas.height; i++){
        for(let j= 0; j< canvas.width; j++){
            setPixel(imagen, canvas.height, canvas.width, gris, a);
            
        }

    }
}
function setPixel(imageData, x, y,gris, a) {
    let color = (x + y * imageData.width) * 4;
    imageData.data[color + 0] = gris;
    imageData.data[color + 1] = gris;
    imageData.data[color + 2] = gris;
    imageData.data[color + 3] = a;

}
filtroGris();