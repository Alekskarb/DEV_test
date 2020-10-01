let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let close = document.querySelector(".slider__close");
let buttonsRight = document.querySelector(".slider__arrow-right");
let buttonsLeft = document.querySelector(".slider__arrow-left");
let imageID ;

function clickImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
            slider.innerHTML = `<img class="popup__image" id='${item.id}' alt="${item.id}" src='${item.src}'/>`;
            popup.classList.add("open");
            // returnID(+item.id);
            imageID = +item.id;
            }
        )
    )
}
function returnID(id) {
    return id;
}
// let imageID = returnID();

function closeImg() {
    close.addEventListener('click', function (e) {
            popup.classList.remove("open");
        }
    )
}

function nextImg(id) {
    buttonsRight.addEventListener('click', function (e) {
        slider.innerHTML = `<img class="popup__image" alt="${id}" src='./img/works/${id++}_featured_works.jpg'/>`;
        }
    )
}
clickImg();
closeImg();
nextImg(imageID);

