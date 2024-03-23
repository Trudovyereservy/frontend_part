'use client';

import SwiperTest from './SwiperTest';
import { sliderPosts } from '@/utils/constans';

const SwiperProvider = () => {
  return (
    <>
      <SwiperTest sliderPosts={sliderPosts} />
    </>
  );
};

export default SwiperProvider;
