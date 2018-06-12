// Get input
document.getElementById('rAll').oninput = cssGeneratorAll;
document.getElementById('rTL').oninput = cssGeneratorTL;
document.getElementById('rTR').oninput = cssGeneratorTR;
document.getElementById('rBL').oninput = cssGeneratorBL;
document.getElementById('rBR').oninput = cssGeneratorBR;

//Get Div
var block = document.getElementById('block');
//Get trexarea
var out = document.getElementById('out');
// All Corners *1**************************
function cssGeneratorAll() {
	block.style.borderRadius = this.value + 'px';
	out.innerHTML = '-webkit-border-radius: '+this.value+'px;\n';
	out.innerHTML += '-moz-border-radius: '+this.value+'px;\n';
	out.innerHTML += 'border-radius: '+this.value+'px';
}
// Top Left Corners *2*********************
function cssGeneratorTL() {
	block.style.borderRadius = this.value + 'px 0 0 0';
	out.innerHTML = '-webkit-border-radius: '+ this.value+'px 0 0 0;\n';
	out.innerHTML += '-moz-border-radius: '+ this.value+'px 0 0 0;\n';
	out.innerHTML += 'border-radius: '+ this.value+'px 0 0 0;';
}
// Top Right Corners *3*********************
function cssGeneratorTR() {
	block.style.borderRadius = '0 '+this.value+'px 0 0';
	out.innerHTML = '-webkit-border-radius: '+'0'+this.value+'px 0 0;\n';
	out.innerHTML += '-moz-border-radius: '+'0'+this.value+'px 0 0;\n';
	out.innerHTML += 'border-radius: '+'0'+this.value+'px 0 0;';
}
// Bottom Right Corners *4********************
function cssGeneratorBR() {
	block.style.borderRadius = '0 0 '+this.value + 'px 0';
	out.innerHTML = '-webkit-border-radius: '+'0 0 '+this.value+'px 0;\n';
	out.innerHTML += '-moz-border-radius: '+'0 0 '+this.value+'px 0;\n';
	out.innerHTML += 'border-radius: '+'0 0 '+this.value+'px 0;';
}
// Bottom Left Corners *5********************
function cssGeneratorBL() {
	block.style.borderRadius = '0 0 0'+this.value + 'px';
	out.innerHTML = '-webkit-border-radius: '+'0 0 0 '+this.value+'px;\n';
	out.innerHTML += '-moz-border-radius: '+'0 0 0 '+this.value+'px;\n';
	out.innerHTML += 'border-radius: '+'0 0 0 '+this.value+'px;';
}
