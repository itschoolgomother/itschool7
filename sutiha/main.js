var box =  document.getElementById("box");


box.style.height = "100px";
box.style.backgroundColor = "red";



window.addEventListener("scroll",function(e){
		box.style.top = pageYOffset+"px";
		box.style.width = pageYOffset/2+"px";

		console.log(pageYOffset);





if(2000>pageYOffset){
	box.style.backgroundColor = "yellow";
}else{
	box.style.backgroundColor = "green";
}else if (2000>pageYOffset){
box.style.backgroundColor = "red";
};

});
