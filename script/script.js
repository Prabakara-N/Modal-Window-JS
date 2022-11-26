//club 1

//Elements

const btnOpenEl = document.getElementById("btn-open-1");
const btnCloseEl = document.getElementById("btn-close-1");
const manUtdEl = document.getElementById("man-utd");

//Functions

btnOpenEl.addEventListener("click", function () {
  manUtdEl.classList.remove("close");
  manUtdEl.classList.add("open");
});

btnCloseEl.addEventListener("click", function () {
  manUtdEl.classList.remove("open");
  manUtdEl.classList.add("close");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    manUtdEl.classList.remove("open");
    manUtdEl.classList.add("close");
  }
});

//club 2

//Elements
const btnOpen = document.getElementById("btn-open-2");
const btnClose = document.getElementById("btn-close-2");
const rmEl = document.getElementById("real-madrid");

//Functions

btnOpen.addEventListener("click", function () {
  rmEl.classList.remove("close");
  rmEl.classList.add("add");
});

btnClose.addEventListener("click", function () {
  rmEl.classList.remove("open");
  rmEl.classList.add("close");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    rmEl.classList.remove("open");
    rmEl.classList.add("close");
  }
});

//club 3

//Elements

const openBtn = document.getElementById("btn-open-3");
const closeBtn = document.getElementById("btn-close-3");
const juvEL = document.getElementById("juventus");

//Functions

openBtn.addEventListener("click", function () {
  juvEL.classList.remove("close");
  juvEL.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  juvEL.classList.remove("open");
  juvEL.classList.add("close");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    juvEL.classList.remove("open");
    juvEL.classList.add("close");
  }
});
