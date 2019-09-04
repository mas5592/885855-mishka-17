"use strict";
var BREAKPOINTS = {
  mobile: "768px",
  tablet: "768px",
  desktop: "1150px"
};

var toggleButton = document.querySelector(".header-block__burger--js"),
  mainNav = document.querySelector(".header__nav-bottom");
function loadShow() {
  toggleButton.classList.remove("visually-hidden");
}
function hideOnMedia(e) {
  if (e.matches) {
    mainNav.classList.remove("header__nav-bottom-js");
  } else {
    mainNav.classList.add("header__nav-bottom-js");
  }
}

var mediaEvent = window.matchMedia("(min-width: " + BREAKPOINTS.tablet.toString() + ")");
hideOnMedia(mediaEvent);
mediaEvent.addListener(hideOnMedia);

window.addEventListener("load", loadShow);

toggleButton.addEventListener("click", function () {
  this.classList.toggle("header-block__burger--close");
  mainNav.classList.toggle("header__nav-bottom-js--active");
});

//Карта

function init(ymaps) {

  let map = new ymaps.Map('map', {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ['zoomControl']
  });

  let placemark = new ymaps.Placemark(
    [59.938633647616214, 30.32304549758399],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101]
    }
  );

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
