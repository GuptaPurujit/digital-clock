// a function to iterate the seconds
// a function to iterate the minutes
// a functions to iterate the hours

let secs = document.getElementById("seconds").innerHTML;
const secs_span = document.getElementById("seconds");
//increments seconds
function sec() {
    secs++;
}

let mins = document.getElementById("minutes").innerHTML;
const mins_span = document.getElementById("minutes");
//increments minutes
function min() {
    mins++;
}

let hrs = document.getElementById("hours").innerHTML;
const hrs_span = document.getElementById("hours");
//increments hours
function hr() {
    hrs++;
}

function secIterate() {
    if(secs < 60)
        secs_span.innerHTML = secs;
    else{
        mins++;
        secs = secs - 60;
        secs_span.innerHTML = secs;
    }
}

function minIterate() {
    if(mins < 60)
        mins_span.innerHTML = mins;
    else{
        hrs++;
        mins = mins - 60;
        mins_span.innerHTML = mins;
    }
}

function hrIterate() {
    if(hrs < 24)
        hrs_span.innerHTML = hrs;
    else{
        hrs = hrs - 24;
        hrs_span.innerHTML = hrs;
    }
}
setInterval(function() {sec(); secIterate(); minIterate(); hrIterate();}, 1000);

// blinking colon

const colon_span = document.getElementsByClassName("colon");

function blink() {
    for(i=0; i<2; i++) {
        colon_span[i].innerHTML = "<>";
    }
}

function back() {
    for(i=0; i<2; i++) {
        colon_span[i].innerHTML = ":";
    }
}