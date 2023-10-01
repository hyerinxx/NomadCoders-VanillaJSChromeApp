const clock = document.querySelector("#clock");

function setTime(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hour}:${min}:${sec}`
}

setTime();
setInterval(setTime, 1000);