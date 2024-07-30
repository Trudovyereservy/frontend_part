'use client';

import { sliderPosts } from '@/utils/constants';

import SwiperFeedbacks from '../SwiperFeedbacks/SwiperFeedbacks';
console.log();
const SwiperProvider = () => {
  return <SwiperFeedbacks sliderPosts={sliderPosts} />;
};

export default SwiperProvider;
