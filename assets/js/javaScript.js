const responsiveBar = document.querySelector(".responsive-bar");
const navLinks = document.querySelector(".nav-link");

responsiveBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});



$(document).ready(function(){
  $('.feedback').slick({
     infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive:true,
  prevArrow: `<span class="nav-btn nav-btn-prev nav-outline">
          <i class="fa-solid fa-arrow-left"></i>
        </span>`,
  nextArrow: `<span class="nav-btn nav-btn-next nav-filled">
          <i class="fa-solid fa-arrow-right"></i>
        </span>`
  });
});
