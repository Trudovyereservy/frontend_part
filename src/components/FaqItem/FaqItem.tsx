'use client';
import styles from './FaqItem.module.scss';
import { useState } from 'react';

const FaqItem = () => {
  const [isItemOpened, setIsItemOpened] = useState(false);
  const handleOpenItem = () => {
    setIsItemOpened(!isItemOpened);
  };

  return (
    <li className={styles.faqitem}>
      <div
        className={`${styles.faqitem__wrapper} ${isItemOpened ? styles.faqitem__wrapper_open : ''}`}
      >
        <h3 className={styles.faqitem__title}>Пример текста</h3>
        <button
          className={`${styles.faqitem__button} ${
            isItemOpened ? styles.faqitem__button_active : ''
          }`}
          onClick={handleOpenItem}
        />
      </div>
      <p
        className={`${styles.faqitem__paragraph} ${
          isItemOpened ? styles.faqitem__paragraph_open : ''
        } `}
      >
        Пример текста пример текста пример текста пример текста пример текста пример текста пример
        текста пример текста пример текста пример текста пример текста пример текста пример текста
        пример текста пример текста пример текста пример текста пример текста пример текста пример
        текста пример текста пример текста пример текста пример текста пример текста пример текста
        пример текста пример текста пример текста пример текста пример текста
      </p>
    </li>
  );
};

export { FaqItem };
