import styles from '../main-banner/main-banner.module.scss';
import picturelogo from '../../../public/Mask group.png';
// import picturebackground from '../../../public/main_banner_picture.svg';
import Image from 'next/image';

const MainBanner = () => {
  return (
    <div className={styles.mainbanner__wrapper}>
      <Image src={picturelogo} alt="background_main_banner" className={styles.mainbanner__logo} />

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
        <button className={styles.mainbanner__button}>Пример текста</button>
      </div>
    </div>
  );
};

export { MainBanner };
