const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasPos = canvas.getBoundingClientRect();
const reset = document.getElementById('reset');
let coord = {x:0, y:0};
let buttonDownload=document.getElementById('download');


ctx.fillStyle = '#e2e2e2';
ctx.fillRect(0,0,canvas.width,canvas.height);

document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
buttonDownload.addEventListener('click', downloadImage);
reset.addEventListener('click',()=> {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0,canvas.width,canvas.height);
});

function start(event) {
    document.addEventListener('mousemove', draw);
    reposition(event);
}

function reposition(event) {
    coord.x = event.clientX - canvasPos.left;
    coord.y = event.clientY - canvasPos.top; 
}

function stop(){
    document.removeEventListener('mousemove', draw);
}

function draw(event){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

function downloadImage(){
    let dataURL = canvas.toDataURL();

    let link = document.createElement('a');
    link.href=dataURL;
    link.download="image.jpeg";
    link.click();
}