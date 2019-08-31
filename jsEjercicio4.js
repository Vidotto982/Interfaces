let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let anchoImg = canvas.width;
let alturaImg = canvas.height;
function imageData() {
    let imageData = ctx.createImageData(anchoImg, alturaImg);
    let a = 255;
    for (let x = 0; x < alturaImg; x++) {
        let tono =(x /alturaImg)*255; 
        for (let y = 0; y < anchoImg; y++) {
            setPixel(imageData, y, x, tono, a);
        }

    }
    ctx.putImageData(imageData, 0, 0);
}
function setPixel(imageData, x, y,tono, a) {
    let color = (x + y * imageData.width) * 4;
    imageData.data[color + 0] = tono;
    imageData.data[color + 1] = tono;
    imageData.data[color + 2] = tono;
    imageData.data[color + 3] = a;

}
imageData();