const toggleBtn = document.querySelector(".toggleicons");
const menu = document.querySelector(".menu-bar");
const icons = document.querySelector(".icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#title").pause(1000).delete(4, { delay: 1000 }).type("Good").go();
});
