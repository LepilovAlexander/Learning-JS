function out() {
	var p;
	p = document.getElementById("out");
	//p.innerHTML = "Hello";
	//Дописать информацию
	//p.innerHTML += " <b>Hello<b/>";
	//p.innerText += "Hi";
	//p.insertAdjacentHTML("beforeBegin", "Hi");
	//beforeBegin - перед открывающим тегом
	//p.insertAdjacentHTML("afterBegin", "Hello!");
	//afterBegin - после открывающего тега
	//p.insertAdjacentHTML("beforeEnd", "Hello!");
	//beforeEnd - перед закрывающим тегом
	p.insertAdjacentHTML("afterEnd", "Hello!");
	//afterEnd - после закрывающего тега
}