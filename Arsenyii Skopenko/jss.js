let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');

ctx.beginPath();
ctx.rect(50, 100, 300, 200);
ctx.fillStyle = "teal";
ctx.fill();
ctx.closePath();