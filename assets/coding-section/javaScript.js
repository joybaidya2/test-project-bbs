const responsiveBar = document.querySelector(".responsive-bar");
const navLinks = document.querySelector(".nav-link");

responsiveBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

