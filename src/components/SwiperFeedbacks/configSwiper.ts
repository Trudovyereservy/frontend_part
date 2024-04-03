import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_LAPTOP,
  BREAKPOINT_NETBOOK,
  BREAKPOINT_TABLET,
  BREAKPOINT_MOBILE,
  BREAKPOINT_MOBILE_MIN,
} from '@/utils/constResizeWindow';

export const config = {
  // breakpoints: {
  //   [BREAKPOINT_MOBILE_MIN]: {
  //     slidesPerView: 'auto',
  //     initialSlide: 0,
  //     spaceBetween: 30,
  //     loop: false,
  //   },
  //   [BREAKPOINT_MOBILE]: {
  //     slidesPerView: 'auto',
  //     initialSlide: 0,
  //     spaceBetween: 20,
  //   },
  //   480: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //     loop: true,
  //   },
  //   [BREAKPOINT_TABLET]: {
  //     initialSlide: 1,
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //   },
  //   [BREAKPOINT_NETBOOK]: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 15,
  //   },
  //   [BREAKPOINT_LAPTOP]: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //   },
  //   [BREAKPOINT_DESKTOP]: {
  //     spaceBetween: 34,
  //     slidesPerView: 'auto',
  //   },
  // },
  // loop: true,
  // slidesPerView: 'auto',
  // initialSlide: 1,
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: true,
  // },
  // speed: 1000,
  // centeredSlides: true,
  // spaceBetween: 35,
  // grabCursor: true,
  // pagination: {
  //   clickable: true,
  // },

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      initialSlide: 0,
      spaceBetween: 30,
      loop: false,
    },
    394: {
      // initialSlide: 0,
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    480: {
      spaceBetween: 20,
      loop: true,
    },
    768: {
      initialSlide: 1,
      spaceBetween: 20,
    },
    880: {
      spaceBetween: 15,
    },
    1024: {
      spaceBetween: 20,
    },
    1280: {
      spaceBetween: 34,
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




// breakpoints: {
//   320: {
//     slidesPerView: 'auto',
//     initialSlide: 0,
//     spaceBetween: 30,
//     loop: false,
//   },
//   395: {
//     slidesPerView: 'auto',
//     initialSlide: 0,
//     spaceBetween: 20,
//   },
//   480: {
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     loop: true,
//   },
//   768: {
//     initialSlide: 1,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//   },
//   880: {
//     slidesPerView: 'auto',
//     spaceBetween: 15,
//   },
//   1024: {
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//   },
//   1280: {
//     spaceBetween: 34,
//     slidesPerView: 'auto',
//   },
// },
// loop: true,
// slidesPerView: 'auto',
// initialSlide: 1,
// autoplay: {
//   delay: 1000,
//   disableOnInteraction: true,
// },
// speed: 1000,
// centeredSlides: true,
// spaceBetween: 35,
// grabCursor: true,
// pagination: {
//   clickable: true,
// },
// };