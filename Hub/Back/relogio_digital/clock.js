let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = String(currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = String(currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
    sec.innerHTML = String(currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();
}, 1000);
