autoSlider();
var left = 0;
var	timer = 0;
function autoSlider(){
	timer = setTimeout(function () {
		var line = document.getElementById('line');
		left -= 128;
		if (left < -512){
			left = 0;
			clearTimeout(timer);
		}
		line.style.left = left + 'px';
		autoSlider();
	}, 2000);
}

