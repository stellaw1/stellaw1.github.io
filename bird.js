const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

//const sprite = new Image();
//sprite.src = "img/sprite.png";

//ctx.drawImage(sprite, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);


function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.height);
    
    ctx.drawImage(bg, 0, 0, 320, 400, 0, 0, 400, 400);
    ctx.drawImage(bird, 0, 0, 38, 26, x, y, 38, 26);
}

function loop() {
    //update();
    draw();
    requestAnimationFrame(loop);
}

loop();
