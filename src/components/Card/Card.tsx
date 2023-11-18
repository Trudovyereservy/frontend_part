import Link from 'next/link'
import Image from 'next/image'
import styles from './card.module.scss'

const Card = () => {
  return (
    <li className={styles.card}>
      <Image
        className={styles.card__image}
        src="/sports-teacher-in-gym-class 1.jpg"
        alt="Обложка новости"
        width={360}
        height={210}
      />
      <h2 className={styles.card__title}>Пример текста пример текста пример текста пример текста</h2>
      <h3 className={styles.card__subtitle}>Пример текста</h3>
      <p className={styles.card__text}>Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример</p>
      <Link className={styles.card__link} href='#'>Пример текста</Link>
    </li>
  )
}
export { Card }
