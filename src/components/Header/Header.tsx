'use client';
import Link from 'next/link';
import styles from './header.module.scss';


const Header = () => {
  return (
    <header className={styles.header__container}>
      {/* <div className={styles.header__wrapper}></div> */}
      <Link className={styles.header__navitem} href="/">
        <div className={styles.header__logo}></div>
      </Link>
      <nav className={styles.header__navigate}>
        <Link className={`${styles.header__navitem} ${styles.header__navhidden}`} href="/blog">
          Блог
        </Link>
        <Link className={`${styles.header__navitem} ${styles.header__navhidden}`} href="/coachs">
          Тренерский состав
        </Link>
        <Link className={`${styles.header__navitem} ${styles.header__navhidden}`} href="/news">
          Новости
        </Link>
        <Link className={`${styles.header__navitem} ${styles.header__navhidden}`} href="/contacts">
          Контакты
        </Link>
        <button className={styles.burger} type="button">
          <span className={styles.burger__icon}></span>
        </button>
      </nav>
    </header>
  );
};

export { Header };
