let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let close = document.querySelector(".slider__close");
let buttonsRight = document.querySelector(".slider__arrow-right");
let buttonsLeft = document.querySelector(".slider__arrow-left");
let imageID;
let flag = false;

function clickImg(e) {
    slider.innerHTML = `<img class="popup__image" src='${e.target.src}'/>`;
    popup.classList.add("open");
    imageID = +e.target.id;
}

img.forEach((item) => {
    item.addEventListener('click', clickImg)
});

function closeImg() {
    close.addEventListener('click', function (e) {
            popup.classList.remove("open");
        }
    )
}

buttonsRight.addEventListener('click', function () {
        slider.innerHTML = `<img class="popup__image" alt="popup_no_image" src='./img/works/${imageID++}_featured_works.jpg'/>`;
        if (imageID === 16) {
            imageID = 11;
        }
    }
)
buttonsLeft.addEventListener('click', function () {
        slider.innerHTML = `<img class="popup__image"  alt="popup_no_image" src='./img/works/${imageID--}_featured_works.jpg'/>`;
        if (imageID === 11) {
            imageID = 16;
        }
    }
)

closeImg();

