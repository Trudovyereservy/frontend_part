'use client';

import styles from './page.module.scss';
import { useState } from 'react';
import { MainBanner } from '@/components/main-banner/main-banner';
import { Faq } from "@/components/Faq/Faq";
import  Form  from "@/components/Form/Form";
import { CardsList } from '@/components/CardsList/CardsList';
import { CardsNews } from '@/components/CardsNews/CardsNews';

export default function Home() {
  const [closeMenu, setCloseMenu] = useState(false);
  
  const handleToggleMenu = () => {
    setCloseMenu(!closeMenu);
  }

  return (
    <main className={styles.mainbanner__wrapper}>
      <MainBanner />
      <CardsList/>
      <Form/>
      <Faq />
      <CardsNews />
    </main>
  );
}
