import { sliderPosts } from '@/utils/constants';

import SwiperGallery from '../SwiperGallery/SwiperGallery';

const SwiperGalleryProvider = () => {
  return <SwiperGallery sliderPosts={sliderPosts} />;
};

export default SwiperGalleryProvider;