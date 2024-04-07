import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_LAPTOP,
  BREAKPOINT_NETBOOK,
  BREAKPOINT_TABLET,
  BREAKPOINT_MOBILE,
  BREAKPOINT_MOBILE_MIN,
} from '@/utils/constResizeWindow';

export const config = {
  breakpoints: {
    320: {
      // slidesPerView: 'auto',
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 30,
      loop: false,
    },
    394: {
      // slidesPerView: 'auto',
      // initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 20,
      // centeredSlides: true,
    },
    480: {
      // slidesPerView: 'auto',
      spaceBetween: 20,
      // slidesPerView: 2,
      // loop: true,
    },
    768: {
      // initialSlide: 1,
      spaceBetween: 20,
      slidesPerView: 2,
      // slidesPerView: 'auto',
    },
    880: {
      spaceBetween: 20,
      slidesPerView: 2,
      // slidesPerView: 'auto',
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 34,
      // slidesPerView: 2,
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
  }
};
