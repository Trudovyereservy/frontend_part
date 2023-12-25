'use client';
import Link from 'next/link';
import styles from './header.module.scss';
import { headerLinks } from '@/utils/constans';
import { LinksHeader } from './LinksHeader/LinksHeader';
import  Menu  from '@/components/Menu/Menu';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleToggleMenu = () => {
    setIsMenuOpen(isMenuOpen => !isMenuOpen);
  }

  return (
    <header className={styles.header__container}>
      <Link className={styles.header__navitem} href="/">
        <div className={styles.header__logo}></div>
      </Link>
      <nav className={styles.header__navigate}>
      <ul className={styles.header__navigate_links}>
        {headerLinks.map((link) => (
          <LinksHeader key={link.id} title={link.title} href={link.href} />
        ))}

        <button className={styles.burger} type="button" onClick={handleToggleMenu}>
          <span className={styles.burger__icon}></span>
        </button>
        </ul>
      </nav>


      {/* В какой компонент встатвить бургер меню?! */}

      <Menu handler={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </header>
  );
};

export { Header };
