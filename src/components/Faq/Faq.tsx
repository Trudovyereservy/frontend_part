import styles from './Faq.module.scss';
import { FaqItem } from '@/components/FaqItem/FaqItem';
import { testFaqItems } from '@/utils/constants';

const Faq = () => (
  <section className={styles.faq}>
    <h2 className={styles.faq__title}>Пример текста</h2>
    <ul className={styles.faq__container}>
      {testFaqItems.map(({ title, text, id }) => (
        <FaqItem title={title} text={text} key={id} />
      ))}
    </ul>
  </section>
);

export { Faq };
