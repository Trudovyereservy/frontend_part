'use client';
import styles from './page.module.scss';
// import '../components/main-banner/'
import { useState } from 'react';

import { MainBanner } from '@/components/main-banner/main-banner';
import Menu from '@/components/Menu/Menu';

export default function Home() {
  const [closeMenu, setCloseMenu] = useState(false);
  
  const handleToggleMenu = () => {
    setCloseMenu(!closeMenu);
  }

  return (
    <div className={styles.mainbanner__wrapper}>
      <MainBanner />

       {/* В какой компонент встатвить бургер меню?! */}

      {/* <Menu handler={closeMenu} handleToggleMenu={handleToggleMenu} /> */}
    </div>
  );
}
