import { FC } from 'react';

import styles from './Filter.module.scss';
import Tag from './Tag/Tag';

interface FilterProps {
    tags: Array<{ id: number, name: string }>
}

const Filter: FC<FilterProps> = ({ tags }) => {
    return (
        <article className={styles.filter}>
            {tags.map(tag =>
                <Tag key={tag.id} name={tag.name} />
            )}
        </article>
    )
};

export default Filter;