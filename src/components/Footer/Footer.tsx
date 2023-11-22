import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          <div className={styles.footer__about}>
            <div className={styles.footer__logo}></div>
            <h3 className={styles.footer__about_title}>Пример текста</h3>
            <p className={styles.footer__about_subtitle}>
              Пример текста пример текста пример текста пример текста пример текста пример текста{' '}
            </p>
          </div>
          <nav className={styles.footer__menu}>
            <ul className={styles.footer__list}>
              <li>
                <h3 className={styles.footer__list_title}>Пример</h3>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
            </ul>
            <ul className={styles.footer__list}>
              <li>
                <h3 className={styles.footer__list_title}>Пример</h3>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
            </ul>
            <ul className={styles.footer__list}>
              <li>
                <h3 className={styles.footer__list_title}>Пример</h3>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footer__list_item}>
                  Пример
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.footer__contacts}>
          <div className={styles.footer__social}>
            <div
              className={`${styles.footer__social_icon} ${styles.footer__social_facebook}`}
            ></div>
            <div className={`${styles.footer__social_icon} ${styles.footer__social_twitter}`}></div>
          </div>
          <div className={styles.footer__adress}>
            <p className={styles.footer__contacts_item}>Пример</p>
            <p className={styles.footer__contacts_item}>Пример</p>
          </div>
          <form className={styles.footer__phone_number}>
            <input type="text" placeholder="Phone" className={styles.footer__input_phone} />
            <button type="submit" className={styles.footer__button}>
              Пример текста
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
