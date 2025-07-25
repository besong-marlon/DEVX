const hamburgerMenu = document.getElementById("hamburgerMenu");
const navMenu = document.getElementById("callToAction");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
