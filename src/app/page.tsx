'use client';

import { useState } from 'react';

import { CardsList } from '@/components/CardsList/CardsList';
import { Faq } from "@/components/Faq/Faq";
import  Form  from "@/components/Form/Form";
import { MainBanner } from '@/components/main-banner/main-banner';
import SwiperProvider from '@/components/ProviderComponents/SwiperProvider';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.mainbanner__wrapper}>
      <MainBanner />
      <CardsList />
      <SwiperProvider />
      <Form />
      <Faq />
    </main>
  );
}
