"use strict"
const display = document.getElementById("demo");


function updateTime(){
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minute = formatTime(date.getMinutes());
    const second = formatTime(date.getSeconds());

    display.innerText = `${hour} : ${minute} : ${second}`;
}

function formatTime(time){
    if(time < 10){
        return '0' + time;
    }
    return time;
}

setInterval(updateTime, 1000);