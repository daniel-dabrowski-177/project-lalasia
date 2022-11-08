const menuBtn = document.querySelector(".menu");
const navPrimary = document.querySelector(".nav-primary");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  isOpen
    ? (navPrimary.children[1].style.visibility = "visible") && !isOpen
    : (navPrimary.children[1].style.visibility = "hidden") && isOpen;
});
