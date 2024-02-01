'use client';
import styles from './page.module.scss';
import { useState } from 'react';
import { MainBanner } from '@/components/main-banner/main-banner';
import { Faq } from "@/components/Faq/Faq";
import { CardsList } from "@/components/CardsList/CardsList";
import  Form from "@/components/Form/Form";
export default function Home() {
  const [closeMenu, setCloseMenu] = useState(false);
  
  const handleToggleMenu = () => {
    setCloseMenu(!closeMenu);
  }

  return (
    <main className={styles.mainbanner__wrapper}>
      <MainBanner />
      <CardsList />
      <Form />
      <Faq />
    </main>
  );
}
