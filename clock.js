const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    var apm = " ";
    var h;

    if(hour > 12){
        h = hour-12;
    }
    else{
        h = hour;
    }

    if(hour > 12){
        apm = "PM";
    }
    else{
        apm = "AM";
    }

    clockTitle.innerText =`${apm} ${h < 10 ? `0${h}` : h}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval("getTime()",1000);
}

init();
