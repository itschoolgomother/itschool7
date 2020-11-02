/*function meetUp(N, C) {
	return Math.floor((12-C)/N);
}
let num = 5;
console.log('num')
	
function getExchange(vidValuti, kurs, summa){
	let kolvo = kurs*summa;
	return `Mi vam dadim ${kolvo} ${vidValuti
	}`;
}

function litres(time){
	return Math.floor(time*0.5);
}
let a = true;
let b = false;
function posravnenie(){
if (a == !b){
	return true;
	}
	else{
		return false;
	}
}
let cashInWallet = 30; 
let amount = 50;
const price = 40;
let enoughWallet = cashInWallet >= price;
let enoughCard = amount>=price;
let canBuy = enoughWallet && enoughCard;
console.log(canBuy);

let isWaterhot = true;
let makeTea = true;
let canMakeTea = isWaterhot && makeTea;

let str = "Hello World"
for (let i = 0 ; i <= str.length ; i++){
	console.log(str[i])
}
function ghj(n) {
	
}
*/
function shark(yourDistabce, sharkDistabce, yourSpeed, sharkSpeed, dolphin) {
	let doubleSpeed = yourSpeed*2;
	if(dolphin){
		yourSpeed = doubleSpeed;
	}
	if(yourDistabce/yourSpeed < sharkDistabce/sharkSpeed){
		return "Alive!"
	}else{
		return "Dead!!! 	Ha! "
	}
}
