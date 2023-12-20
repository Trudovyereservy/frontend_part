'use client';
import { FaqItemProps } from './FaqItem.props';
import styles from './FaqItem.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

const FaqItem = ({ title, text }: FaqItemProps) => {
  const [isItemOpened, setIsItemOpened] = useState(false);
  const handleOpenItem = () => {
    setIsItemOpened(!isItemOpened);
  };

  return (
    <li className={styles.faqitem}>
      <div
        className={classNames(styles.faqitem__wrapper, {
          [styles.faqitem__wrapper_open]: isItemOpened,
        })}
      >
        <h3 className={styles.faqitem__title}>{title}</h3>
        <button
          className={`${styles.faqitem__button} ${
            isItemOpened ? styles.faqitem__button_active : ''
          }`}
          onClick={handleOpenItem}
        />
      </div>
      <p
        className={classNames(styles.faqitem__paragraph, {
          [styles.faqitem__paragraph_open]: isItemOpened,
        })}
      >
        {text}
      </p>
    </li>
  );
};

export { FaqItem };
