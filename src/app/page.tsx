'use client'
import styles from './page.module.scss';
import { MainBanner } from '@/components/main-banner/main-banner';
import { Faq } from '@/components/Faq/Faq';
import Form from '@/components/Form/Form';
import { CardsList } from '../components/CardsList/CardsList';
// import FeedbacksSlider from '../components/FeedbacksSlider/FeedbacksSlider';
import { sliderPosts } from '@/utils/constans';
import SwiperTest from '@/components/SwiperTest/SwiperTest';

export default function Home() {
  return (
    <main className={styles.mainbanner__wrapper}>
      <MainBanner />
      <CardsList />
      {/* <FeedbacksSlider posts={sliderPosts} /> */}
      <SwiperTest sliderPosts={sliderPosts}/>
      <Form />
      <Faq />
    </main>
  );
}
