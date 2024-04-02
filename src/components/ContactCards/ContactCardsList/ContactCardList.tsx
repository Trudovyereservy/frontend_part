import { FC } from 'react';
import styles from './contactCardList.module.scss';

import { IContactCardListProps } from './ContactCardList.props';
import ContactCard from '../ContactCard/ContactCard';

const ContactCardList: FC<IContactCardListProps> = ({ cards }) => {
    return (
        <article className={styles.cardList}>
            {cards.map(card =>
                <ContactCard key={card.id} card={card} />
            )}
        </article>
    )
};

export default ContactCardList;