import React from 'react';
// import { NavLink } from "react-router-dom";
import styles from './menu.module.scss';
import Link from 'next/link';

const Menu = ({ handler, handleToggleMenu }) => {
  const closeMenu = () => {
    handleToggleMenu(false);
  };

  return (
    <section className={`${styles.menu} ${handler ? `${styles.menu_active}` : ''}`}>
      <div className={`${styles.menu__overlay} ${handler ? `${styles.menu__overlay_active}` : ''}`}></div>
      <section className="menu__container">
        <button className="menu__button-close" type="button" onClick={closeMenu}></button>
        <nav className="menu__nav">
          <Link
            onClick={closeMenu}
            href="/blog"
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`}
          >
            Блог
          </Link>
          <Link
            onClick={closeMenu}
            href="/coachs"
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`}
          >
            Тренерский состав
          </Link>
          <Link
            onClick={closeMenu}
            href="/news"
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link_active' : ''}`}
          >
            Новости
          </Link>
          <Link
            onClick={closeMenu}
            href="/contacts"
            className={({ isActive }) => `menu__account ${isActive ? 'menu__account_active' : ''}`}
          >
            Контакты
          </Link>
        </nav>
      </section>
    </section>
  );
};

export default Menu;
