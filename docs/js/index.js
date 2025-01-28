// Swiper
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider__control--next',
    prevEl: '.slider__control--previous',
  },
  pagination: {
    el: '.news__dots',
  }
};

const swiper = new Swiper('.swiper', swiperParams);