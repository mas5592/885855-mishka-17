"use strict";
var BREAKPOINTS = {
  mobile: "768px",
  tablet: "768px",
  desktop: "1150px"
};
var toggleButton = document.querySelector(".header-block__burger--js"),
  mainNav = document.querySelector(".header-nav__bottom");
function loadShow() {
  toggleButton.classList.remove("visually-hidden");
}
function hideOnMedia(e) {
  if (e.matches) {
    mainNav.classList.remove("header-nav__bottom-js");
  } else {
    mainNav.classList.add("header-nav__bottom-js");
  }
}
toggleButton.addEventListener("click", function () {
  this.classList.toggle("header-block__burger--close");
  mainNav.classList.toggle("header-nav__bottom-js--active");
});
