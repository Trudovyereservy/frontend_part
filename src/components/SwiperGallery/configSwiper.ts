import { TConfig } from './SwiperGalleryTypes';

export const config: TConfig = {
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
