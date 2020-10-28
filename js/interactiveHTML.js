let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".works_image");
let popup = document.querySelector(".slider");
let buttonsRight = document.querySelector(".slider__arrow-right");
let buttonsLeft = document.querySelector(".slider__arrow-left");
let teamContainer = document.querySelector(".team_container");

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
    slider.addEventListener('click', function (e) {
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
let arrPeople = [
    {name: "alesia", job: "UI designer", describe: "beautiful girl", src: './img/team/21_team.jpg'},
    {name: "bob", job: "frontend", describe: "blackman", src: "./img/team/22_team.jpg"},
    {name: "alex", job: "backend", describe: "coolman", src: "./img/team/23_team.jpg"},
    {name: "ales", job: "developer", describe: "beardman", src: "./img/team/24_team.jpg"},
    {name: "olga", job: "graphic designer", describe: "beautiful", src: "./img/team/25_team.jpg"},
    {name: "alesia", job: "designer", describe: "beautiful girl", src: "./img/team/26_team.jpg"}
]

let newPeople = arrPeople.map((item, index) => {
    return `
       <div class="team__image">
            <img alt="miss_img" src=${arrPeople[index].src} />
            <div class="team_comment-block">
                <div class="team_comment-title"> ${arrPeople[index].name} 
                    <span> ${arrPeople[index].job} </span>
                </div>
                <div class="team_comment-text"> ${arrPeople[index].describe} 
                </div> 
                <div class="team_comment-contacts">
                     <a title="pinterest" href="https://pinterest.com/pin/create/button/?url=https://www.pinterest.com/&media=&description=">
                        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                    <a title="twitter" href="https://twitter.com/intent/tweet?url=&text=skarb">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a title="facebook" href="https://www.facebook.com/sharer/sharer.php?u=">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a title="google" href="mailto:alex.korbutovski@gmail.com">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                </div>           
            </div>     
       </div>
        `
});

teamContainer.innerHTML = `${newPeople}`;