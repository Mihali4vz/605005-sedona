var togglenav = document.querySelector(".page-header__toggle");
var nav = document.querySelector(".main-nav__list");
var closenav = document.querySelector(".site-list__button");
var logo = document.querySelector(".page-header__logo-image")
closenav.addEventListener("click", function (evt) {
evt.preventDefault();
nav.classList.remove("main-nav__list--show");
nav.classList.add("main-nav--hide");
logo.classList.add("logo-up");
togglenav.classList.remove("page-header__toggle--hide");
});
togglenav.addEventListener("click", function (evt) {
evt.preventDefault();
nav.classList.add("main-nav__list--show");
nav.classList.remove("main-nav--hide");
logo.classList.remove("logo-up");
togglenav.classList.add("page-header__toggle--hide");
});
