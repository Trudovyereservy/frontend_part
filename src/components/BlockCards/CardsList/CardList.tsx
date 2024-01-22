import styles from './CardsList.module.scss';
import { Card } from '../Card/Card';
// import { blogCards } from '@/utils/constans';

const CardsList = ({blogCards, count}) => {

  // console.log(window.innerWidth);

  return (
    <section className={styles.cardslist}>
      {/* <h2 className={styles.cardslist__title}>Блог</h2> */}
      <ul className={styles.cardslist__container}>
        {blogCards.slice(0, count).map((card) => (
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