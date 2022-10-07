/*
input
*/
//filters
let Brightness = document.getElementById("Brightness");
let contrast = document.getElementById("contrast");
let saturate = document.getElementById("saturate");
let sepia = document.getElementById("sepia");
let Grayscale = document.getElementById("Grayscale");
let Blur = document.getElementById("Blur");
let HueRotate = document.getElementById("Hue-rotate");
//btn
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let reset = document.querySelector("span")
//img
let img = document.getElementById("img");
let imgBox = document.getElementById("img-box");
function resetValue(){
    img.style.filter="none"
    Brightness.value="100";
    contrast.value="100";
    saturate.value="100";
    sepia.value="0";
    Grayscale.value="0";
    Blur.value="0";
    HueRotate.value="0";
}
const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");
/////////////////////////////////////////////////
/*
process
*/
window.onload = function(){
    download.style.display='none';
    reset.style.display='none';
    imgBox.style.display='none';
}
upload.onchange = function(){
    resetValue();
    download.style.display='block';
    reset.style.display='block';
    imgBox.style.display='block';
   let file = new FileReader();
   file.readAsDataURL(upload.files[0]);
   file.onload = function(){
    img.src = file.result;
   }
   img.onload = function(){
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display="none"
   }
}
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>{
    filter.addEventListener('input', function(){
        ctx.filter=` 
        brightness(${Brightness.value}%)
        contrast(${contrast.value}%)
        saturate(${saturate.value}%)
        sepia(${sepia.value}%)
        grayscale(${Grayscale.value})
        Hue-rotate(${HueRotate.value}deg)
        Blur(${Blur.value}px)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    });
});
reset.onclick = function(){
    resetValue();
}
download.onclick = function(){
    download.href = canvas.toDataURL();

}
