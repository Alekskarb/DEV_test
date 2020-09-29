let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let close = document.querySelector(".slider__close");
let buttonsRight = document.querySelector(".slider__arrow-right");
let buttonsLeft = document.querySelector(".slider__arrow-left");

function clickImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
                slider.innerHTML = `<button class="slider__arrow-left">left</button>
                                    <img alt="missing" src='${item.src}'/>
                                    <div class="slider__close"> X </div>
                                    <button class="slider__arrow-right">right</button>`;
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

