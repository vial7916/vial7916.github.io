let body = document.querySelector('div');
body.addEventListener('click', giveAlert);

function giveAlert() {
    alert('this is an alert');
}

const hover = document.getElementById("hover");

hover.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";
    setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    }, false);


function myFunction() {
        var x = document.getElementById("fname");
        x.value = x.value.toUpperCase();
      }