$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  new Typed("#typed", {
    strings: [
      "a Full Stack Developer",
      "a Software Developer",
      "an App Developer",
    ],
    typeSpeed: 100,
    delaySpeed: 1000,
    backSpeed: 30,
    backDelay: 500,
    loop: true,
  });

  let hamburger = document.querySelector(".hamburger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");
  let home = document.querySelector(".home");
  let about = document.querySelector(".about1");
  let projects = document.querySelector(".projects1");
  let work = document.querySelector(".work1");
  let skills = document.querySelector(".skills1");
  let contact = document.querySelector(".contact1");

  hamburger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });

  home.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });

  about.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    mobileNav.classList.add(".about2");
  });

  projects.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    mobileNav.classList.add(".projects2");
  });

  work.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    mobileNav.classList.add(".work2");
  });

  skills.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    mobileNav.classList.add(".skills2");
  });

  contact.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    mobileNav.classList.add(".contact2");
  });
});
