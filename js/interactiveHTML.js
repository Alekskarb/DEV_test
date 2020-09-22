let body = document.querySelector(".slider__body__content");
let slider = document.querySelector(".slider");

function clickImg(id) {
    // let img = document.getElementById(`${id}`);
    // img.forEach(item => item.classList.toggle("slider"));
    slider.addEventListener('click', function () {
        // evt.preventDefault();
        slider.classList.add("slider__show");
        body.style.backgroundImage = "url('./img/works/ + `${id}` + _featured_works.jpg')";
    })
}

