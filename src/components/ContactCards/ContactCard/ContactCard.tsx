import { FC } from "react";
import styles from "./contactCard.module.scss";

import { IContactCard } from "../ContactCardsList/ContactCardList.props";

interface CardProp {
    card: IContactCard
}

const ContactCard: FC<CardProp> = ({ card }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.card__title}>{card.title}</h3>
            <p className={styles.card__subtitle}>{card.subtitle}</p>
        </div>
    );
};

export default ContactCard;