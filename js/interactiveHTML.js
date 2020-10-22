let slider = document.querySelector(".slider__body__content");
let img = document.querySelectorAll(".works_image");
let popup = document.querySelector(".slider");
let man = document.querySelector(".team_container");
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
let arrPeople = [
    {name: "alesia", job: "UI designer", describe: "beautiful girl", src: "./img/team/21_team.jpg"},
    {name: "bob", job: "frontend", describe: "blackman", src: "./img/team/22_team.jpg"},
    {name: "alex", job: "backend", describe: "coolman", src: "./img/team/23_team.jpg"},
    {name: "ales", job: "developer", describe: "beardman", src: "./img/team/24_team.jpg"},
    {name: "olga", job: "graphic designer", describe: "beautiful", src: "./img/team/25_team.jpg"},
    {name: "alesia", job: "designer", describe: "beautiful girl", src: "./img/team/26_team.jpg"}
]

// function clickMan(e) {
//     man[+e.target.id].innerHTML = `<img class="team__image" alt="miss_img" id="0" src="./img/team/21_team.jpg"/></div>
//     <div class="team_comment-block">
//        <div class="team_comment-title">${arrPeople[+e.target.id].name}
//        <span> ${arrPeople[+e.target.id].job} </span>
//        </div>
//     <div class="team_comment-text">${arrPeople[+e.target.id].describe}
//     </div>
//     <div class="team_comment-contacts">
//         <i class="fa fa-facebook" aria-hidden="true"></i>
//         <i class="fa fa-twitter" aria-hidden="true"></i>
//         <i class="fa fa-dribbble" aria-hidden="true"></i>
//         <i class="fa fa-envelope-o" aria-hidden="true"></i>
//         </div>
//         </div>`
//     console.log(e);
// }

let newMan = arrPeople.map((item) => {
    man.innerHTML = `
        <img class="team__image" alt="miss_img" src="${arrPeople[item].src}"/>
        <div class="team_comment-block">
        <div class="team_comment-title"> ${arrPeople[item].name} <span> ${arrPeople[item].job} </span></div>
        <div class="team_comment-text">${arrPeople[item].describe}</div> <br/>
            <div class="team_comment-contacts">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-dribbble" aria-hidden="true"></i>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
        </div>`
});
man.append(newMan);

