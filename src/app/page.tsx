'use client';
import { useState } from 'react';

import { Faq } from "@/components/Faq/Faq";
import  Form  from "@/components/Form/Form";
import { MainBanner } from '@/components/main-banner/main-banner';

import { CardsList } from '../components/CardsList/CardsList';

import styles from './page.module.scss';

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
    </main>
  );
}
