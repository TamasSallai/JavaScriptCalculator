var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eigthBtn = document.getElementById('calc-eigth');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var decimalBtn = document.getElementById('calc-decimal');

var displayValElement = document.getElementById('calc-display-val');

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;
  
  if(displayVal === '0')
    displayVal = '';

  displayVal += btnText;
  displayValElement.innerText = displayVal;
  
}

for(let i = 0; i < calcNumBtns.length; i++){
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}



/* for(let i = 0; i < calcOperatorBtns; i++){
  calcOperatorBtns[i].addEventListener("click", performOperation, false);
} */
