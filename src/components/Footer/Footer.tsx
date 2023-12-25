'use client';
import styles from './footer.module.scss';
import Link from 'next/link';
import { Button } from '../Button/Button';
import { linksItems, buttonsNames } from '../../utils/constans';
import { Input } from '../Input/Input';
import { useForm } from 'react-hook-form';
import {LinksBlock} from '../Links/LinksBlock';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });


  const createLinks = (index: number, sectionName: string, linksItems: object) => {
    return (
      <ul key={index} className={styles.footer__list}>
  <h3 className={styles.footer__list_title}>{sectionName}</h3>
  {linksItems.map((link) => (
    <LinksBlock key={link.id} linkUrl={link.linkUrl} linkText={link.linkText} />
  ))}
</ul>
    )
  }

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
            <h3 className={styles.footer__list_title}>Пример</h3>
              {linksItems.exampleOne.map((link) => (
                <LinksBlock key={link.id} linkUrl={link.linkUrl} linkText={link.linkText} />
              ))}
            </ul> */}
            {createLinks(1, 'Список1', linksItems.exampleOne)}
            {createLinks(2, 'Список2', linksItems.exampleTwo)}
            {createLinks(3, 'Список3', linksItems.exampleThree)}
            {/* <ul className={styles.footer__list}>
            <h3 className={styles.footer__list_title}>Пример</h3>
              {linksItems.exampleTwo.map((link) => (
                <LinksBlock key={link.id} linkUrl={link.linkUrl} linkText={link.linkText} />
              ))}
            </ul>
            <ul className={styles.footer__list}>
            <h3 className={styles.footer__list_title}>Пример</h3>
              {linksItems.exampleThree.map((link) => (
                <LinksBlock key={link.id} linkUrl={link.linkUrl} linkText={link.linkText} />
              ))}
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
              {buttonsNames.mainButtonFooter}
            </Button>
            {/* {!isValid ? <div className={styles.footer__form_error}>Введите номер телефона</div> : ''} */}
            <div className={styles.footer__form_error}>
              {errors?.Phone && <p>{errors?.Phone?.message || 'введите номер телефона'}</p>}
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
