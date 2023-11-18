import styles from './CardsList.module.scss'
import { Card } from '../Card/Card'
const CardsList = () => {
  return (
    <section className={styles.cardslist}>
      <h2 className={styles.cardslist__title}>Пример текста</h2>
      <ul className={styles.cardslist__container}>
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  )
}

export { CardsList }
