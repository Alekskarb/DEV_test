let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");
let close = document.querySelector(".slider__close");

function clickImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
            slider.innerHTML = `<img alt="missing" src="./img/works/${item.id}_featured_works.jpg"/>
                                <div class="slider__close"> X </div>`;
            popup.classList.add("open");
            // console.log(item.id);
            }
        )
    )
}
function closeImg() {
    popup.addEventListener('click', function (e) {
        console.log(e);
                popup.classList.remove("open");
            }
    )
}
clickImg();
closeImg();

