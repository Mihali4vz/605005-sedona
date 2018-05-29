var togglenav = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav__list");
var closenav = document.querySelector(".exit-button");
var logo = document.querySelector(".page-header__logo-image")
closenav.addEventListener("click", function (evt) {
evt.preventDefault();
nav.classList.remove("main-nav--show");
nav.classList.add("main-nav--hide");
logo.classList.add("logo-up");
togglenav.classList.remove("toggle-hide");
});
togglenav.addEventListener("click", function (evt) {
evt.preventDefault();
nav.classList.add("main-nav--show");
nav.classList.remove("main-nav--hide");
logo.classList.remove("logo-up");
togglenav.classList.add("toggle-hide");
});
