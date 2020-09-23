let body = document.querySelector(".slider__body__content");
let img = document.querySelectorAll("img");

function clickImg() {
    // let img = document.getElementById(`${id}`);
    // img.forEach(item => item.classList.toggle("slider"));
    img.forEach((item) =>
        item.addEventListener('click', function (e) {
            console.log(e.target);
            let image = document.querySelector(".slider__body__content");
            image.classList.add();
                // slider.classList.add("slider__show");
                // body.style.backgroundImage = `url('./img/works/ + ${id} + _featured_works.jpg')`;
            }
        )
    )
}

clickImg();

