'use client';
import styles from './footer.module.scss';
import Link from 'next/link';
import { Button } from '../Button/Button';
import { buttons } from '../../utils/constans';
import { useState } from 'react';
import { Input } from '../Input/Input';
import { useForm } from 'react-hook-form';
import { Links } from '../Links/Links';

const Footer = () => {
  // const [errors, setErrors] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          <div className={styles.footer__about}>
            <Link href="#">
              <div className={styles.footer__logo}></div>
            </Link>
            <h3 className={`${styles.footer__about_title} ${styles.footer__hidden}`}>
              Пример текста
            </h3>
            <p className={`${styles.footer__about_subtitle} ${styles.footer__hidden}`}>
              Пример текста пример текста пример текста пример текста пример текста пример текста{' '}
            </p>
          </div>
          <nav className={styles.footer__menu}>
            {/* <ul className={styles.footer__list}>
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
            </ul> */}

            <ul className={styles.footer__list_row}>
              {buttons[0].map((link) => (
                <Links
                  key={link.id}
                  title={link.title}
                  text={link.text}
                  linkUrl={link.linkUrl}
                  linkText={link.linkText}
                />
              ))}
            </ul>

            {/* <ul className={styles.footer__list}>
              {buttons[1].map((link) => (
                <Links
                  key={link.id}
                  title={link.text}
                  text={link.text}
                  linkUrl={link.linkUrl}
                  linkText={link.linkText}
                />
              ))}
            </ul>

            <ul className={styles.footer__list}>
              {buttons[2].map((link) => (
                <Links
                  key={link.id}
                  title={link.text}
                  text={link.text}
                  linkUrl={link.linkUrl}
                  linkText={link.linkText}
                />
              ))}
            </ul> */}

            {/* <ul className={styles.footer__list}>
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
            <ul className={`${styles.footer__list} ${styles.footer__hidden}`}>
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
            </ul> */}
          </nav>
        </div>

        <div className={styles.footer__contacts}>
          <div className={styles.footer__social}>
            <Link href="#">
              <div
                className={`${styles.footer__social_icon} ${styles.footer__social_facebook}`}
              ></div>
            </Link>
            <Link href="#">
              <div
                className={`${styles.footer__social_icon} ${styles.footer__social_twitter}`}
              ></div>
            </Link>
          </div>
          <div className={styles.footer__adress}>
            <Link href="#">
              <p className={styles.footer__contacts_item}>Пример</p>
            </Link>
            <Link href="#">
              <p className={styles.footer__contacts_item}>Пример</p>
            </Link>
          </div>
          <form
            className={`${styles.footer__phone_number} ${styles.footer__hidden}`}
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Input className={styles.footer__input_phone} register={register} nameInput={'Phone'} />
            <Button
              className={styles.footer__button}
              disabled={!isValid}
              active={true}
              onClick={() => {
                console.log('Кнопка нажата!');
              }}
            >
              {buttons[0][1].text}
            </Button>
            {/* {!isValid ? <div className={styles.footer__form_error}>Введите номер телефона</div> : ''} */}
            <div className={styles.footer__form_error}>
              {errors?.Phone && <p>{errors?.Phone?.message || 'Введите номер телефона'}</p>}
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
