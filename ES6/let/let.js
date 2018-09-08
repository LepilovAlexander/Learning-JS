"use strict"

var buttons = document.querySelectorAll('button');

var i;

for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function (e) {
    console.log(i);

  };

}