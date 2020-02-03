var box = document.getElementById("box");
var rand = Math.random() * 500;

var randr = Math.random()* 255
var randg = Math.random()* 255
var randb = Math.random()* 255


box.style.width = rand + "px"
box.style.height = rand + "px"
box.style.backgroundColor = "rgb("+randr+","+randg+","+randbs+")"

for(var i =0;i<100;i++){
	box.innerHTML += '<div class= "box"></div>'
}
