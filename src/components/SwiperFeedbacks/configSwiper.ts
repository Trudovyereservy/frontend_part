export const config = {
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      initialSlide: 0,
      spaceBetween: 30,
      loop: false,
    },
    395: {
      slidesPerView: 'auto',
      initialSlide: 0,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
    },
    768: {
      initialSlide: 1,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    880: {
      slidesPerView: 'auto',
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1280: {
      spaceBetween: 34,
      slidesPerView: 'auto',
    },
  },
  loop: true,
  slidesPerView: 'auto',
  initialSlide: 1,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  speed: 1000,
  centeredSlides: true,
  spaceBetween: 35,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
};
