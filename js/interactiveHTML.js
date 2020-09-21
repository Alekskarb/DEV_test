let containers = document.querySelectorAll("img");
let container = document.querySelector(".works_container");

function clickImg() {
    let img = document.querySelectorAll("img");
    img.forEach(item => item.classList.toggle("show"));
}