interface BreakpointConfig {
  spaceBetween: number;
  slidesPerView: number | 'auto';
  initialSlide?: number;
  loop?: boolean;
  centeredSlides?: boolean;
}
export interface TSlidesGallery {
    id: number;
    linkUrl: string;
    imgUrl: string;
  };


  export interface TConfig {
    breakpoints: {
      [key: string]: BreakpointConfig;
    };
    loop: boolean;
    slidesPerView: number | 'auto';
    initialSlide: number;
    autoplay?: {
      delay: number;
      disableOnInteraction: boolean;
    };
    // speed: number;
    navigation: boolean;
    centeredSlides: boolean;
    spaceBetween: number;
    grabCursor: boolean;
    pagination: {
      clickable: boolean;
    };
  }

  