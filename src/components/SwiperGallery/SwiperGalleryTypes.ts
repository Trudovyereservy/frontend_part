export interface TSlidesGallery {
    id: number;
    linkUrl: string;
    imgUrl: string;
  };

  export interface TConfig {
    loop: boolean;
    slidesPerView: number | 'auto';
    initialSlide: number;
    autoplay: {
      delay: number;
      disableOnInteraction: boolean;
    };
    speed: number;
    centeredSlides: boolean;
    spaceBetween: number;
    grabCursor: boolean;
    pagination: {
      clickable: boolean;
    };
  }