import { TConfigSwiper } from './SwiperGalleryTypes';

import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_LAPTOP,
  BREAKPOINT_NETBOOK,
  BREAKPOINT_TABLET,
  BREAKPOINT_POCKETPC,
  BREAKPOINT_MOBILE,
} from '@/utils/constResizeWindow';

export const config: TConfigSwiper = {
  slidesPerView: 'auto',
  // slidesPerView: 2,
  initialSlide: 0,
  spaceBetween: 30,
  centeredSlides: true,
  loop: false,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  navigation: false,
  breakpoints: {
    // [BREAKPOINT_MOBILE]: {
    // 394: {
    //   // slidesPerView: 3,
    //   slidesPerView: 'auto',
    //   initialSlide: 0,
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   loop: false,
    // },
    [BREAKPOINT_POCKETPC]: {
      loop: true,
      // slidesPerView: 1,
      slidesPerView: 'auto',
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 5,
    },
  },
};
