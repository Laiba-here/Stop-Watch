let  hour = 0;
let  second = 0;
let  mintue = 0;
let  counter = 0;

let timer = false;

function start(){
    timer= true;
    stopwatch()
}
function stop() {
    timer = false;
}

function reset(){
    timer= false;
    counter = 0;  
    second = 0;    
    mintue = 0;    
    hour = 0;


     document.getElementById("count").innerHTML="00"  
     document.getElementById("sec").innerHTML="00"
     document.getElementById("hr").innerHTML="00"
     document.getElementById("min").innerHTML="00"
}
function stopwatch() {
   if (timer) {
    counter++
    setTimeout(stopwatch,10)
    document.getElementById("count").innerHTML = counter;
   
   if (counter == 100) {
      second++
    document.getElementById("sec").innerHTML = second;
    counter = 0
   }
   if (second == 60) {
    mintue++
    document.getElementById("min").innerHTML = mintue;
    second = 0
   }
   if (mintue == 60) {
    hour++
    document.getElementById("hr").innerHTML = hour;
    mintue = 0
   }
   if (second<10) {
    document.getElementById("sec").innerHTML="0"+ second;
   }
   if (counter<10) {
    document.getElementById("count").innerHTML="0" + counter;
   }
   if (mintue<10) {
    document.getElementById("min").innerHTML="0" + mintue;
   }
   if (hour<10) {
    document.getElementById("hr").innerHTML="0" + hour;
   }
}
}