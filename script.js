let mynumber = document.querySelector("input");

function myFunction() {
  document.getElementById("omtrek").innerHTML = mynumber.value *  Math.PI;
document.getElementById("Oppervlakte").innerHTML = mynumber.value * mynumber.value * Math.PI * 0.25;
}

 var tijd = new Date();
 document.getElementById("tijd").innerHTML = tijd;
