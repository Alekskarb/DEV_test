let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".works_image");
let imgWork = document.querySelectorAll(".team__image");
let popup = document.querySelector(".slider");
let man = document.querySelectorAll(".team__block");
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
        imageID++;
        if (imageID === 17) {
            imageID = 11;
        }
        slider.innerHTML = `<img class="popup__image" alt="popup_no_image" src='./img/works/${imageID}_featured_works.jpg'/>`;
    }
)
buttonsLeft.addEventListener('click', function () {
        imageID--;
        if (imageID === 10) {
            imageID = 16;
        }
        slider.innerHTML = `<img class="popup__image" alt="popup_no_image" src='./img/works/${imageID}_featured_works.jpg'/>`;
    }
)

function clickMan() {
    // for (let item of man) {
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

man.forEach((person) => {
    person.addEventListener('click', clickMan(person))
});
clickMan();
// }

