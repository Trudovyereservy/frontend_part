import styles from "./Faq.module.scss"
import { FaqItem } from "../FaqItem/FaqItem"

const Faq = () => {
    return(
        <section className={styles.faq}>
            <h2 className={styles.faq__title}>Пример текста</h2>
            <ul className={styles.faq__container}>
                <FaqItem />
                <FaqItem />
                <FaqItem />
            </ul>
        </section>
    )
}

export { Faq }