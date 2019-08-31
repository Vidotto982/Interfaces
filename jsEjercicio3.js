"use strict";
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');




function imageData(){
    let anchoLinea  = 500;
    let alturaLinea = 200; 
    let anchoImg = 50;// vertice en X
    let alturaImg = 20;// vertice en Y
    let imageData = ctx.createImageData(anchoLinea,alturaLinea);
        let r = 150;
        let g = 0;
        let b = 0;
        let a = 255;
        for(let x=0;x<anchoImg;x++){
            for(let y= 0; y<alturaImg; y++){
                setPixel(imageData,x,y,r,g,b,a);
            }
        }
        ctx.putImageData(imageData, alturaImg, anchoImg);
}

function setPixel(imageData,x,y,r,g,b,a){
    let color = (x + y *1)*4;
    imageData.data[color+0]= r;
    imageData.data[color+1]= g;
    imageData.data[color+2]= b;
    imageData.data[color+3]= a;

}
imageData();