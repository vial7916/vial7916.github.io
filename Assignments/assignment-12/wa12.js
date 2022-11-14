function submit() {
    alert(output.textContent);
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

var slider1 = document.getElementById("myRange1");
var sliderSubmit1 = document.querySelector(".slider-submit-button1").addEventListener('click', update1);
var sliderOutput1 = document.querySelector(".slider-output1");

var slider2 = document.getElementById("myRange2");
var sliderSubmit2 = document.querySelector(".slider-submit-button2").addEventListener('click', update2);
var sliderOutput2 = document.querySelector(".slider-output2");

var slider3 = document.getElementById("myRange3");
var sliderSubmit3 = document.querySelector(".slider-submit-button3").addEventListener('click', update3);
var sliderOutput3 = document.querySelector(".slider-output3");

function update1() {
  sliderOutput1.textContent = slider1.value;
}

function update2() {
    sliderOutput2.textContent = slider2.value;
  }

function update3() {
    sliderOutput3.textContent = slider3.value;
  }
