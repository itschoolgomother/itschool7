var say = prompt("Ваш пароль","password")
var time = new Date();
var mypas = ""+time.getMinutes()


if (say == mypas) {
alert("привет,Богдана")
code()
}else{
	alert("пока")

}



function code(){
var usd = 24.5
var x = prompt ("ваше число?",10)

var resutGrn = usd*x
var resutUsd = x/usd
alert(resutGrn.toFixed (2)+"грн")
alert(resutUsd.toFixed (2)+"$")
}
