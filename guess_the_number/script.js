var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
tempOut = document.getElementById('temp-out');
tempOut.innerHTML = prNum;

function f1() {
	var num, out;
	//Генерацмя от 1 - 10
	prNum = Math.floor((Math.random() * 10) + 1);
	tempOut = document.getElementById('temp-out');
	tempOut.innerHTML = prNum;

	num = document.getElementById('mynum').value;
	out = document.getElementById('out');

	if (num == prNum) {
		out.innerHTML = "Вы угадали";
	} else if (num > prNum) {
		out.innerHTML = "Вы ввели число больше чем нужно";
	} else {
		out.innerHTML = "Вы ввели число меньше чем нужно";
	}
}