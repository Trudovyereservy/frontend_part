import React from 'react';
// import { NavLink } from "react-router-dom";
import styles from './menu.module.scss';
import Link from 'next/link';
// import { useRouter } from "next/router";

const Menu = ({ handler, handleToggleMenu }) => {
  const closeMenu = () => {
    handleToggleMenu(false);
  };

  // const router = useRouter();

  return (
    <section className={`${styles.menu} ${handler ? `${styles.menu_active}` : ''}`}>
      <div className={`${styles.menu__overlay} ${handler ? `${styles.menu__overlay_active}` : ''}`}></div>
      <section className={styles.menu__container}>
        <button className={styles.menu__button_close} type="button" onClick={closeMenu}></button>
        <nav className={styles.menu__nav}>
          <Link
            onClick={closeMenu}
            href="/blog"
            // className={(`${styles.menu__link} ${router.pathname == "/" ? `${styles.menu__link_active}` : ''}}
            className={styles.menu__link}
          >
            Блог
          </Link>
          <Link
            onClick={closeMenu}
            href="/coachs"
            // className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`}
            className={styles.menu__link}
          >
            Тренерский состав
          </Link>
          <Link
            onClick={closeMenu}
            href="/news"
            // className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`}
            className={styles.menu__link}
          >
            Новости
          </Link>
          <Link
            onClick={closeMenu}
            href="/contacts"
            // className={({ isActive }) => `menu__account ${isActive ? 'menu__account_active' : ''}`}
            className={styles.menu__link}
          >
            Контакты
          </Link>
        </nav>
      </section>
    </section>
  );
};

export default Menu;
