let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".image");
let popup = document.querySelector(".slider");

function clickImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
            slider.innerHTML = `<img alt=\"missing\" src=\"./img/works/${item.id}_featured_works.jpg\"/>`;
            popup.classList.add("open");
            console.log(item.id);
            }
        )
    )
}
function closeImg() {
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
                slider.innerHTML = `<img alt=\"missing\" src=\"./img/works/${item.id}_featured_works.jpg\"/>`;
                popup.classList.add("slider__show");
                console.log(item.id);
            }
        )
    )
}
clickImg();

