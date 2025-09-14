let day = document.getElementById("day");
let month = document.getElementById("month");
let years = document.getElementById("years");

setInterval(() =>{
    let currentDay = new Date();

    day.innerHTML = currentDay.getDate().toString().padStart(2, "0");     // 01–31
    month.innerHTML = (currentDay.getMonth() + 1).toString().padStart(2, "0"); // 01–12
    years.innerHTML = currentDay.getFullYear();                           // ex: 2025
}, 1000);