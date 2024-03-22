'use client';
import styles from '../main-banner/main-banner.module.scss';
import picturelogo from '../../../public/Mask group.png';
import picturelogo_mobile from '../../../public/Mask group_394px.png';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { buttonsNames } from '@/utils/constants';

const MainBanner = () => {
  return (
    <div className={styles.mainbanner__wrapper}>
      <Image src={picturelogo} alt="background_main_banner" className={styles.mainbanner__logo} />
      <Image
        src={picturelogo_mobile}
        alt="background_main_banner"
        className={styles.mainbanner__logo_mobile}
      />

      <div className={styles.mainbanner__background}></div>
      <div className={styles.mainbanner__container}>
        <h1 className={styles.mainbanner__title}>
          Пример <span className={styles.mainbanner__words}>текста пример текста</span> пример
          текста пример текста
        </h1>
        <p className={styles.mainbanner__subtitle}>
          Пример текста пример текста пример текста пример текста пример текста пример текста пример
          текста пример текста пример текста
        </p>
        <Button
          className={styles.mainbanner__button}
          disabled={false}
          active={true}
          onClick={() => {
            console.log('Кнопка нажата!');
          }}
        >
          {buttonsNames.mainButtonFooter}
        </Button>
      </div>
    </div>
  );
};

export { MainBanner };
