/*===== PRODUCT SLIDER =====*/
let titles = [];
const slides = document.querySelectorAll(".detail-card>.title");
titles = Array.from(slides).map((a) => a.innerText);

var productsSwiper = new Swiper(".products-slider", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".products-slider__pagination",
    clickable: true,

    bulletClass: "products-slider__pagination__item",
    bulletActiveClass: "products-slider__pagination__item--active",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + titles[index] + "</span>";
    },
  },
});

var reviewsSwiper = new Swiper(".reviews-slider", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 2000,
  },
});
