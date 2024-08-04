var display = document.getElementById("display");

function btn1() {
  display.innerText = display.innerText + "1";
}

function btn2() {
  display.innerHTML = display.innerText + "2";
}

function btn3() {
  display.innerHTML = display.innerText + "3";
}
function btn4() {
  display.innerHTML = display.innerText + "4";
}

function btn5() {
  display.innerHTML = display.innerText + "5";
}

function btn6() {
  display.innerHTML = display.innerText + "6";
}

function btn7() {
  display.innerHTML = display.innerText + "7";
}

function btn8() {
  display.innerHTML = display.innerText + "8";
}

function btn9() {
  display.innerHTML = display.innerText + "9";
}

function btn0() {
  display.innerHTML = display.innerText + "0";
}

function clr() {
  display.innerHTML = "";
}

function add() {
  display.innerHTML = display.innerText + "+";
}

function sub() {
  display.innerHTML = display.innerText + "-";
}
function div() {
  display.innerHTML = display.innerText + "/";
}

function mult() {
  display.innerHTML = display.innerText + "*";
}

function eql() {
  display.innerHTML = eval(display.innerText);
}
