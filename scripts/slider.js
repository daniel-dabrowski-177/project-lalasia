const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  freeMode: true,
  slidesPerView: 4,
  initialSlide: 1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  loopFillGroupWithBlank: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
