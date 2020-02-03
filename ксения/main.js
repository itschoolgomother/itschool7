setInterval(function(){

      var red = Math.random() * 255
      var green = Math.random() * 255
      var blue = Math.random() * 255
  
      document.body.style.backgroundColor = "rgb("+green+","+red+","+blue+")"      
      var rand = Math.random() * 50
      box.style.borderRadius = rand+"%"
},1000);

var box = document.getElementById("box")
box.style.width = "100px"
box.style.height = "100px"
box.style.backgroundColor = "red"
