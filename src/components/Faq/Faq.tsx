import { testFaqItems } from '../../utils/constants';
import { FaqItem } from '../FaqItem/FaqItem';

import styles from './Faq.module.scss';

const Faq = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>Пример текста</h2>
      <ul className={styles.faq__container}>
        {testFaqItems.map(({ title, text, id }) => (
          <FaqItem title={title} text={text} key={id} />
        ))}
      </ul>
    </section>
  );
};

export { Faq };
