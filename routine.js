// Import stylesheets
import "./style.css";

// Write Javascript code!
var one = document.getElementById("9am");
var two = document.getElementById("10am");
var three = document.getElementById("12am");
var four = document.getElementById("break");
var five = document.getElementById("1pm");
var six = document.getElementById("3pm");
var change = document.getElementById("time");

function timer() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  console.log(h + ":" + m);
  change.innerHTML = h + ":" + m;

  if ((h === 9 && m >= 30) || (h === 10 && m <= 30)) {
    one.style.background = "red";
  }
  if ((h === 10 && m >= 40) || (h === 11 && m <= 40)) {
    two.style.background = "red";
  }
  if ((h === 11 && m >= 50) || (h === 12 && m <= 50)) {
    three.style.background = "red";
  }
  if ((h === 12 && m > 50) || (h === 13 && m <= 50)) {
    four.style.background = "red";
  }
  if ((h === 13 && m > 50) || (h === 14 && m <= 50)) {
    five.style.background = "red";
  }
  if ((h === 15 && m >= 0) || (h === 16 && m <= 0)) {
    six.style.background = "red";
  }
  //if (h === 1 && m >= 40) {
  // one.style.background = "red";
  //}
  //if (h === 1 && m <= 30) {
  //  one.style.background = "blue";
  //}
}

setTimeout(timer, 100);
setInterval(timer, 300000);
