let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let man = document.querySelectorAll(".team__image");
let close = document.querySelector(".slider__close");
let buttonsRight = document.querySelector(".slider__arrow-right");
let buttonsLeft = document.querySelector(".slider__arrow-left");
let imageID;

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

closeImg();
buttonsRight.addEventListener('click', function () {
        slider.innerHTML = `<img class="popup__image" alt="popup_no_image" src='./img/works/${imageID++}_featured_works.jpg'/>`;
        if (imageID === 16) {
            imageID = 11;
        }
    }
)
buttonsLeft.addEventListener('click', function () {
        slider.innerHTML = `<img class="popup__image" alt="popup_no_image" src='./img/works/${imageID--}_featured_works.jpg'/>`;
        if (imageID === 11) {
            imageID = 16;
        }
    }
)

function clickMan() {
    man.innerHTML = `<div class="team_comment-block">
        <div class="team_comment-title">AL RAYHAN <span> / UI Designer </span></div>
    <div class="team_comment-text">Lorem Ipsum is not simply is an action designer random text
    It has roots in a piece. </div> <br/>
    <div class="team_comment-contacts">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
        </div>`
}
man.forEach((person) => {person.addEventListener('click', clickMan)});
