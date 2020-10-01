let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let close = document.querySelector(".slider__close");
let buttonsRight = document.querySelector(".slider__arrow-right");
let buttonsLeft = document.querySelector(".slider__arrow-left");

function clickImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {

                slider.innerHTML = `<img class="popup__image" alt="missing" src='${item.src}'/>`;
                popup.classList.add("open");
            }
        )
    )
}

function closeImg() {
    close.addEventListener('click', function (e) {
        if (close) {
            popup.classList.remove("open");
        }
            console.log(e.target);
            console.log(close);
        }
    )
}

function nextImg() {
    buttonsRight.addEventListener('click', function (e) {
            // if (close) {
            popup.classList.remove("open");
            // }
            console.log(e.target);
            console.log(close);
        }
    )
}
clickImg();
closeImg();
nextImg();

