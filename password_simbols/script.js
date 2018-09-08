var str = '';
document.getElementById('test').onkeypress = function (event) {
	console.log(event);
	str += event.key;
	// console.log(str);
	// this.value += String.fromCharCode(getRandomInt(65, 122));//random value
	this.value += "*";//
	// console.log(String.fromCharCode(122));
	return false;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

}