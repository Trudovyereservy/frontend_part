import styles from './CardsList.module.scss';
import { Card } from '../Card/Card';
import { testCards } from '@/utils/constatns';
const CardsList = () => {
  return (
    <section className={styles.cardslist}>
      <h2 className={styles.cardslist__title}>Пример текста</h2>
      <ul className={styles.cardslist__container}>
        {testCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            text={card.text}
            imgUrl={card.imgUrl}
            linkUrl={card.linkUrl}
            linkText={card.linkText}
          />
        ))}
      </ul>
    </section>
  );
};

export { CardsList };