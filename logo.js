const canvas=document.getElementById("logoCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=120;
let angle=0;

function drawLogo(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2,60);
    ctx.rotate(Math.sin(angle)*0.3);
    ctx.font="40px Arial";
    ctx.fillStyle="yellow";
    ctx.shadowColor="purple";
    ctx.shadowBlur=20;
    ctx.fillText("SmartK TV",-120,0);
    ctx.restore();
    angle+=0.02;
    requestAnimationFrame(drawLogo);
}
drawLogo();
