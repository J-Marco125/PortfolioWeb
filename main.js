const aboutBTN = document.querySelector(".menu");
const myName = document.querySelector(".my-name");
const navbar = document.querySelector(".nav-bar");
const aboutPage = document.querySelector(".About-container");
const heroPage = document.querySelector("#hero");
const activeName = document.querySelector(".name");
const AboutHeading = document.querySelector(".about-heading-2");
const aboutParag1 = document.querySelector(".parag");
const aboutParag2 = document.querySelector(".parag-2");
const aboutList = document.querySelector(".list-style");
const myPic = document.querySelector(".my-pic");
aboutBTN.addEventListener("click", function(e) {
    myName.classList.toggle("Active-name");
    navbar.classList.toggle("Active-nav");

    heroPage.style.top = "-100%";

    AboutHeading.style.opacity = "100%";
    AboutHeading.style.right = " 0%";
    aboutParag2.style.opacity = "100%";
    aboutParag2.style.right = "0%";
    aboutParag1.style.opacity = "100%";
    aboutParag1.style.right = " 0%";
    aboutList.style.opacity = "100%";
    aboutList.style.right = "0%";
    myPic.style.left = "0%";
});