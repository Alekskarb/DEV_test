let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let close = document.querySelector(".slider__close");

function clickImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
                slider.innerHTML = `<img alt="missing" src='${item.src}'/>
                                <div class="slider__close"> X </div>`;
                popup.classList.add("open");
            }
        )
    )
}

function closeImg() {
    popup.addEventListener('click', function (e) {
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

