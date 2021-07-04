function timer() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  console.log(h + ":" + m + ":" + s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  if ((h === 9 && m >= 30) || (h === 10 && m <= 30)) {
    document.getElementById("one").classList.add("table-warning");
  }
  if ((h === 10 && m >= 40) || (h === 11 && m <= 40)) {
    document.getElementById("two").classList.add("table-warning");
    document.getElementById("one").classList.remove("table-warning");
  }
  if ((h === 11 && m >= 50) || (h === 12 && m <= 50)) {
    document.getElementById("three").classList.add("table-warning");
    document.getElementById("two").classList.remove("table-warning");
  }
  if ((h === 12 && m > 50) || (h === 13 && m <= 50)) {
    document.getElementById("four").classList.add("table-warning");
    document.getElementById("three").classList.remove("table-warning");
  }
  if ((h === 13 && m > 50) || (h === 14 && m <= 50)) {
    document.getElementById("five").classList.add("table-warning");
    document.getElementById("four").classList.remove("table-warning");
  }
  if ((h === 15 && m >= 0) || (h === 16 && m <= 0)) {
    document.getElementById("six").classList.add("table-warning");
    document.getElementById("five").classList.remove("table-warning");
  }
  if (h > 16) {
    if (document.getElementById("six").classList.contains("table-warning")) {
      document.getElementById("six").classList.remove("table-warning");
    }
  }
}
setTimeout(timer, 100);
setInterval(timer, 1000);
