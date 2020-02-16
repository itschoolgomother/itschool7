var canvas = document. getElementById("canvas")
var ctx  = canvas. getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight
canvas.style.backgroundColor = "blue"

setInterval(function(){

	

var randex = Math.random() * innerWidth
var randey = Math.random() * innerHeight
var red = Math.random() * 255
var green = Math.random() * 255
var blue = Math.random() * 255

ctx.fillStyle = "rgb("+red+","+green+","+blue+")"

ctx.fillRect(randex,randey,100,100);
},100)