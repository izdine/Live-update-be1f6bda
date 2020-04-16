let mynumber = document.querySelector("input");

function myFunction() {
  document.getElementById("omtrek").innerHTML = mynumber.value *  Math.PI;
document.getElementById("Oppervlakte").innerHTML = mynumber.value * mynumber.value * Math.PI * 0.25;
}


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var tijd = new Date();
  var tijdUpdate = tijd.toLocaleTimeString();
  document.getElementById("tijd").innerHTML = tijdUpdate;
}
