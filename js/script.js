let header = document.querySelector("header");
header.style.height = `${window.innerHeight}px`;

// setting up preloader
const loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// setting up menu
// const hamburger = document.querySelector(".nav__hamburger");
// const menu = document.querySelectorAll(".menu__item--primary");
// const navbar = document.querySelector(".primary__nav");
// let click = false;
// hamburger.addEventListener("click", () => {
//   navbar.classList.toggle("active");
//   if (click == false) {
//     menu.forEach((element) => {
//       element.classList.add("open");
//       element.classList.remove("close");
//     });
//     click = true;
//   } else {
//     menu.forEach((element) => {
//       element.classList.remove("open");
//       element.classList.add("close");
//     });
//     click = false;
//   }
// });

//Navbar color will change when scroll
// window.addEventListener("scroll", function (e) {
//   const navBar = document.querySelector("nav");
//   if (
//     document.documentElement.scrollTop ||
//     document.body.scrollTop > window.innerHeight
//   ) {
//     // navBar.classList.add("nav-colored");
//   } else {
//     // navBar.classList.remove("nav-colored");
//   }
// });

//seting up loadmore button
const loadMore = document.getElementById("loadMore");
const toolbox = document.querySelector(".toolbox");
const foge = document.querySelector(".section__fog");
let loadMoreClick = false;
loadMore.addEventListener("click", () => {
  if (loadMoreClick == false) {
    loadMore.innerText = "See Less";
    loadMoreClick = true;
  } else if (loadMoreClick == true) {
    loadMore.innerText = "Load More";
    loadMoreClick = false;
  }
  toolbox.classList.toggle("exprend");
  foge.classList.toggle("disactive");
});

// window.screen.availHeight;
// console.log(window.screen.availHeight);
// window.screen.availLeft = 0;
// window.screen.availTop = 0;
// window.screen.availWidth = 1280;
// window.screen.colorDepth = 32;
// window.screen.height = 1280;
// window.screen.pixelDepth = 32;
// window.screen.width = 1280;
