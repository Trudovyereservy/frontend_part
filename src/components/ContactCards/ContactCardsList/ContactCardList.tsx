import { FC } from 'react';

import ContactCard from '../ContactCard/ContactCard';

import { IContactCardListProps } from './ContactCardList.props';

import styles from './ContactCardList.module.scss';

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