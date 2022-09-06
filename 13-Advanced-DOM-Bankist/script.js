"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnLearnMore = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach(el => el.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// learn more btn
// console.log(btnLearnMore);
btnLearnMore.addEventListener("click", function (e) {
    let section1Coords = section1.getBoundingClientRect();
    // console.log("section1Coords", section1Coords);
    // console.log("currennt pos x/y", window.pageXOffset, window.pageYOffset);
    console.log("section1Coords.y", section1Coords);

    // window.scrollTo(
    //     section1Coords.left + window.pageXOffset,
    //     section1Coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     left: section1Coords.left + window.pageXOffset,
    //     top: section1Coords.top + window.pageYOffset,
    //     behavior: "smooth",
    // });

    section1.scrollIntoView({ behavior: "smooth" });
});

// page navigation прокрутка навигации
// let navLink = document.querySelectorAll(".nav__link");
// for (const nav of navLink) {
//     nav.addEventListener("click", function (e) {
//         e.preventDefault();
//         console.log(e.target.getAttribute("href"));

//         let gotoElem = document.querySelector(e.target.getAttribute("href"));
//         console.log("gotoElem", gotoElem);
//         gotoElem.scrollIntoView({ behavior: "smooth" });
//     });
// }
document.querySelector(".nav__links").addEventListener("click", function (e) {
    if (e.target.classList.contains("nav__link")) {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    }
});

// tabs
let tabs = document.querySelectorAll(".operations__tab");
let tabsContainer = document.querySelector(".operations__tab-container");
let tabsContent = document.querySelectorAll(".operations__content");

// for (const tab of tabs) {
//     tab.addEventListener("click", function (e) {
//         document.querySelector(".operations__tab--active").classList.remove("operations__tab--active");
//         this.classList.add("operations__tab--active");

//         document.querySelector(".operations__content--active").classList.remove("operations__content--active");
//         document.querySelector(`.operations__content--${this.dataset.tab}`).classList.add("operations__content--active");
//     });
// }

tabsContainer.addEventListener("click", function (e) {
    // let target = e.target;
    // if (!target.children.length) {
    //     target = target.parentNode;
    //     console.log("test");
    // }
    let target = e.target.closest(".operations__tab");
    // console.log("target.childNodes", target.children);
    console.log("target", target);
    if (target === null) {
        return;
    }
    tabs.forEach(function (tab) {
        tab.classList.remove("operations__tab--active");
    });
    tabsContent.forEach(function (tc) {
        tc.classList.remove("operations__content--active");
    });
    // document.querySelector(".operations__tab--active").classList.remove("operations__tab--active");
    // document.querySelector(".operations__content--active").classList.remove("operations__content--active");

    target.classList.add("operations__tab--active");
    document.querySelector(`.operations__content--${target.dataset.tab}`).classList.add("operations__content--active");
});

// fade menu
let logo = document.querySelector(".nav__logo");
logo.style.transition = "opacity .2s linear";
let navLinks = document.querySelector(".nav__links");
let nav = document.querySelector(".nav");
let navIitems = document.querySelectorAll(".nav__item");
navIitems.forEach(ell => (ell.style.transition = "opacity .2s linear"));

// navIitems.forEach(function (el) {
//     el.addEventListener("mouseenter", function (e) {
//         navIitems.forEach(ell => (ell.style.opacity = "0.5"));
//         logo.style.opacity = "0.5";
//         console.log(el);

//         el.style.opacity = "1";
//     });
// });
// navIitems.forEach(function (el) {
//     el.addEventListener("mouseleave", function (e) {
//         navIitems.forEach(ell => (ell.style.opacity = "1"));
//         logo.style.opacity = "1";
//     });
// });

//
//

// nav.addEventListener("mouseover", function (e) {
//     if (e.target.classList.contains("nav__link")) {
//         let target = e.target;
//         let sublings = target.closest(".nav").querySelectorAll(".nav__link");
//         let logo = target.closest(".nav").querySelector("img");

//         sublings.forEach(function (el) {
//             if (target !== el) el.style.opacity = "0.5";
//         });
//         logo.style.opacity = "0.5";
//     }
// });

// nav.addEventListener("mouseout", function (e) {
//     if (e.target.classList.contains("nav__link")) {
//         let target = e.target;
//         let sublings = target.closest(".nav").querySelectorAll(".nav__link");
//         let logo = target.closest(".nav").querySelector("img");

//         sublings.forEach(function (el) {
//             if (target !== el) el.style.opacity = "1";
//         });
//         logo.style.opacity = "1";
//     }
// });

nav.addEventListener("mouseover", e => opacity(e, 0.5));
// nav.addEventListener("mouseover", opacity.bind(0.5));
nav.addEventListener("mouseout", e => opacity(e, 1));

function opacity(e, opacityValue) {
    if (e.target.classList.contains("nav__link")) {
        let target = e.target;
        let sublings = target.closest(".nav").querySelectorAll(".nav__link");
        let logo = target.closest(".nav").querySelector("img");

        sublings.forEach(function (el) {
            if (target !== el) el.style.opacity = opacityValue;
        });
        logo.style.opacity = opacityValue;
    }
}
//
// sticky nav
// window.addEventListener("wheel", function (e) {
//     let section1Coords = section1.getBoundingClientRect().y;
//     // console.log("section1Coords.top", section1.getBoundingClientRect().top);
//     // console.log("section1Coords", section1Coords);
//     // console.log("scrollY", window.scrollY);

//     if (0 >= section1Coords) {
//         nav.classList.add("sticky");
//     } else {
//         nav.classList.remove("sticky");
//     }
// });

// sticky nav Intersection Observer API
function obsCallback(entries, observer) {
    // console.log("entries", entries[0]);
    // console.log("observer", observer);
    // console.log(`секция пересечена на ${Math.trunc(entries[0].intersectionRatio * 100)}%`);
    if (0 < entries[0].intersectionRatio) {
        nav.classList.remove("sticky");
    } else {
        nav.classList.add("sticky");
    }
}

let rm = `-${nav.getBoundingClientRect().height}px`;
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: rm,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(document.querySelector(".header__title"));
//

// Intersection Observer API 2
function sectionsObsCb(entries, observer) {
    // console.log("entries[0].intersectionRatio", entries[0]);
    // console.log("entries[0]", entries[0].target);
    // console.log("observer", observer);

    if (entries[0].isIntersecting) {
        // console.log("errt");
        entries[0].target.classList.remove("section--hidden");
        observer.unobserve(entries[0].target);
    }
}
const sectionsObsOpt = {
    threshold: 0.07,
};

const sectionsObserver = new IntersectionObserver(sectionsObsCb, sectionsObsOpt);
let sections = document.querySelectorAll(".section");
sections.forEach(section => {
    section.classList.add("section--hidden"); // раскомментить потом
    sectionsObserver.observe(section);
});

//  lazy loading images
const imgObsOpt = {
    threshold: 0,
    rootMargin: "-150px",
};

function imgObsCb(entries, observer) {
    if (!entries[0].isIntersecting) return;

    entries[0].target.src = entries[0].target.dataset.src;
    entries[0].target.addEventListener("load", function (e) {
        entries[0].target.classList.remove("lazy-img");
    }); //для ожидания загрузки картинки
    observer.unobserve(entries[0].target); //удаление обсервера
}

const imgObserver = new IntersectionObserver(imgObsCb, imgObsOpt);
let lazyImg = document.querySelectorAll(".lazy-img");

lazyImg.forEach(img => {
    imgObserver.observe(img);
});

// slider
function slider() {
    // slider dots
    // variables
    let slides = document.querySelectorAll(".slide");
    let currSlide = 0;
    let dotsContainer = document.querySelector(".dots");
    // variables
    function createDots() {
        slides.forEach(function (_, i) {
            let dt;
            if (i == 0) dt = `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`;
            else dt = `<button class="dots__dot" data-slide="${i}"></button>`;
            dotsContainer.insertAdjacentHTML("beforeend", dt);
            // console.log(i);
        });
    }
    createDots();

    dotsContainer.addEventListener("click", function (e) {
        if (!e.target.classList.contains("dots__dot")) return;
        currSlide = e.target.dataset.slide;
        goToSlide(slides, currSlide);
    });

    // dots.forEach(function (dot, i) {
    //     dot.addEventListener("click", function (e) {
    //         currSlide = i;
    //         goToSlide(slides, currSlide);
    //     });
    // });
    function updDots() {
        let dots = document.querySelectorAll(".dots__dot");
        dots.forEach(el => el.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${currSlide}"]`).classList.add("dots__dot--active");
        // dots[currSlide].classList.add("dots__dot--active");
    }
    // slider dots

    // let slider = document.querySelector(".slider");
    // slider.style.transform = "scale(0.5)"; //удалить потом
    // slider.style.overflow = "visible"; //удалить потом

    goToSlide(slides, currSlide);
    function goToSlide(slides, currSlide) {
        slides.forEach(function (slide, i) {
            slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
            // console.log(Number.parseInt(slide.style.transform.slice(11)));
        });
        updDots();
    }

    function prevSlide(e) {
        if (currSlide == 0) currSlide = 2;
        else currSlide--;
        goToSlide(slides, currSlide);
    }
    function nextSlide(e) {
        if (currSlide == 2) currSlide = 0;
        else currSlide++;
        goToSlide(slides, currSlide);
    }

    document.querySelector(".slider__btn--left").addEventListener("click", prevSlide);
    document.querySelector(".slider__btn--right").addEventListener("click", nextSlide);

    // keys
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        else if (e.key === "ArrowRight") nextSlide();
        // console.log(e.key);
    });
}
slider();
// test
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.body);
// let sections = document.querySelectorAll(".section");
// console.log("sections", sections);

// let buttons = document.getElementsByTagName("button");
// console.log("buttons", buttons);

// console.log("buttons2 getElementsByClassName", document.getElementsByClassName("btn"));

// let header = document.querySelector(".header");

// let message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = "";
// message.innerHTML = "We want watch for you.  <button class='btn btn--close-cookie'>No problems</button>";

// // header.prepend(message);
// // header.append(message.cloneNode(true));

// header.before(message);

// document.querySelector(".btn--close-cookie").addEventListener("click", function () {
//     message.remove();
// });

// // styles
// message.style.backgroundColor = "#37383d";
// // message.style.width = "120%";

// console.log(message.style.color);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseInt(getComputedStyle(message).height) + 20 + "px";

// document.documentElement.style.setProperty("--color-primary", "orange");
// console.log("");

// let logo = document.querySelector(".nav__logo");
// console.log("logo.alt", logo.alt);
// console.log("logo.src", logo.src);
// console.log("logo.getAttribute('src')", logo.getAttribute("src"));
// console.log("");

// console.log(logo.getAttribute("designer"));

// logo.setAttribute("company", "bankist");
// console.log("");

// // data attr
// console.log(logo.dataset.versionNumber);

//

// let h1 = document.querySelector(".header__title h1");
// console.log(h1);

// h1.addEventListener("mouseenter", h1click);

// function h1click() {
//     console.log("test");
// }

// setTimeout(() => {
//     h1.removeEventListener("mouseenter", h1click);
// }, 3000);

// Всплытие и погружение

// header;
// header__title;
// <span class="highlight">banking</span>;

// document.querySelector(".highlight").addEventListener("click", function (e) {
//     console.log("highlight e.target", e.target);
//     // e.stopImmediatePropagation();
// });

// document.querySelector(".header__title").addEventListener(
//     "click",
//     function (e) {
//         console.log("header__title e.target", e.target);
//     },
//     true
// );

// Всплытие и погружение 2

// function denerateRandomColor() {
//     let color1 = Math.trunc(Math.random() * 255);
//     let color2 = Math.trunc(Math.random() * 255);
//     let color3 = Math.trunc(Math.random() * 255);
//     return `rgb(${color1},${color2},${color3})`;
// }
// console.log(denerateRandomColor());

// // header;  >>>  nav;  >>>  nav__links;  >>>  nav__item;  >>>  nav__link;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//     console.log("nav__link", e.target);
//     this.style.backgroundColor = denerateRandomColor();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//     console.log("nav__links", e.target);
//     this.style.backgroundColor = denerateRandomColor();
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//     console.log("nav", e.target);
//     this.style.backgroundColor = denerateRandomColor();
// });

//dom traversing

// let h1 = document.querySelector("h1");
// console.log("0", h1.querySelectorAll(".highlight"));
// console.log("1", h1.childNodes);
// console.log("2", h1.firstElementChild);

// console.log("3", h1.parentNode);
// console.log("4", h1.parentElement);

// console.log("5", h1.closest(".header"));

// // sideways
// console.log("6", h1.previousElementSibling);
// console.log("7", h1.nextElementSibling);
// console.log("8", h1.parentNode.childNodes);

// let sd = document.querySelector(".section__description");
// console.log(sd);
// console.log(sd.nextElementSibling);
// console.log(sd.parentElement.children);

// document.addEventListener("DOMContentLoaded", function (e) {
//     console.log(e);
// });
// window.addEventListener("load", function (e) {
//     console.log("full load", e);
// });

// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     prompt("fuck you");
//     // e.returnValue = ""; // дополнительное подтверждение ухода со страницы
//     // return false; // еще вариант дополнительного подтверждения ухода со страницы
// });

// window.onbeforeunload = function () {
//     return false;
// };
