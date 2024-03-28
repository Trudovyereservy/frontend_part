'use client';

import SwiperFeedbacks from '../SwiperFeedbacks/SwiperFeedbacks';
import { sliderPosts } from '@/utils/constans';

const SwiperProvider = () => {
  return <SwiperFeedbacks sliderPosts={sliderPosts} />;
};

export default SwiperProvider;
