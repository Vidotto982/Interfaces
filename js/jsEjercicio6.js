let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');      
let imagen = new Image();
imagen.crossOrigin = "anonymous";
imagen.src ="img/banner.jpg"; 
imagen.width = canvas.width;
imagen.height= canvas.height;
let imageData= ctx.createImageData(imagen.width,imagen.height);



imagen.onload = function(){
myDrawImageMethod(this);
}

function myDrawImageMethod(imagen){
    ctx.drawImage(imagen,0,0);
}

function filtroGris() {
    let r = 130;
    let g = 130;
    let b = 130;
    let a = 70;

    for (let x = 0; x < imagen.height*2; x++){
        for(let y= 0; y< imagen.width*2; y++){

            setPixel(imageData, x, y, r, g, b, a);
            
        }
        
    }
    ctx.putImageData(imageData,0,0);

}
function setPixel(imageData, x, y,r,g,b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
    
}

filtroGris();