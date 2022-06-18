"use strict";

let overlay = document.querySelector(".overlay");
let btns = document.querySelectorAll(".show-modal");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        document.querySelector(".modal").classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

function closeModal() {
    document.querySelector(".modal").classList.add("hidden");
    overlay.classList.add("hidden");
}

document.querySelector(".close-modal").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if ((e.key === "`" || e.key === "ё") && !overlay.classList.contains("hidden")) {
        closeModal();
    }
});
