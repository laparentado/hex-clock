var time = document.getElementById("time")
var background = document.getElementById("background")

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myTime(){
  var today = new Date();
  var hours = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  for (var i=0; i<=myTime.length; i++){

  hours = checkTime(hours);
  min = checkTime(min);
  sec = checkTime(sec);

  time.innerHTML = hours +":"+ min +":"+ sec;
  background.style.backgroundColor = "#"+(hours)+(min)+(sec);
}
setInterval(function() {
    myTime()
  }, 200);
}
myTime();