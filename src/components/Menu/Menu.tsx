import React from 'react';
import styles from './menu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinksMenu } from '@/utils/constans';

const Menu = ({ handler, handleToggleMenu }) => {
  const closeMenu = () => {
    handleToggleMenu(false);
  };

  const pathName = usePathname();
  

  return (
    <section className={`${styles.menu} ${handler ? `${styles.menu_active}` : ''}`}>
      <div
        className={`${styles.menu__overlay} ${handler ? `${styles.menu__overlay_active}` : ''}`}
      ></div>
      <section className={styles.menu__container}>
        <button className={styles.menu__button_close} type="button" onClick={closeMenu}></button>
        <nav className={styles.menu__nav}>
          <>
            {navLinksMenu.map((link) => {
              const isActive = pathName === link.href;
              return (
                <Link
                  className={isActive ? `${styles.menu__link_active} ${styles.menu__link}` : `${styles.menu__link}`}
                  onClick={closeMenu}
                  href={link.href}
                  key={link.id}
                >
                  {link.name}
                </Link>
              );
            })}
          </>
        </nav>
      </section>
    </section>
  );
};

export default Menu;
