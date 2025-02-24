const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hr = document.getElementById("hrs");

var interval;
var seconds = "00";
var minutes = "00";
var hours = "00";

sec.innerHTML = ":00";
min.innerHTML =":00";
hr.innerHTML = "00";


start.onclick = function (){
    clearInterval(interval);
        interval = setInterval(starter, 10);
}

pause.onclick = function(){
    clearInterval(interval);
}

reset.onclick = function(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    sec.innerHTML = ":" + seconds + "0";
    min.innerHTML = ":" + minutes + "0";
    hr.innerHTML = hours + "0";
}

function starter(){
    seconds++; 
        
    if(seconds <= 9){
      sec.innerHTML = ":0" + seconds;
    }

    if (seconds > 9){
        sec.innerHTML = ":" + seconds;
        
      } 

    if (seconds > 99) {
        minutes++;
        min.innerHTML = ":0" + minutes;
        seconds = 0;
        sec.innerHTML = ":0" + seconds;
    }
    if (minutes > 9){
        min.innerHTML = ":" + minutes;
      } 

    if (minutes > 59) {
        hours++;
        hr.innerHTML = "0" + hours;
        minutes = 0;
        min .innerHTML = ":0" + minutes;
    }
    if (hours > 9) {
      hr.innerHTML = hours;
    }

}
