let dd = document.querySelector("#dd");
let mm = document.querySelector("#mm");
let yyyy = document.querySelector("#yyyy");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function process (){
    let date = new Date;
    dd.innerHTML=date.getDay();
    mm.innerHTML=date.getMonth();
    yyyy.innerHTML=date.getFullYear();
    hour.innerHTML=date.getHours();
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();
}
process();
setInterval(process,1000)