import { FC } from 'react';

import styles from './Tag.module.scss';

interface TagProps {
    name: string
}

const Tag: FC<TagProps> = ({ name }) => {
    return (
        <div className={styles.tag}>{name}</div>
    )
};

export default Tag;