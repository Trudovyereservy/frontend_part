import { FC, useEffect, useMemo, useState } from 'react';

import { IFilterProps } from './Filter.props';
import Tag from './Tag/Tag';

import styles from './Filter.module.scss';

const Filter: FC<IFilterProps> = ({ tags, posts, filterPosts }) => {
    const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

    useEffect(() => {
        filterPosts(filteredPosts);
    }, [selectedTags, posts])

    const filteredPosts = useMemo(
        () => {
            if (selectedTags.length !== 0) {
                const filtredPosts = posts.filter((post) => post.tags.some(tag => selectedTags.includes(tag)))
                return filtredPosts;
            } else {
                return posts;
            }
        }
        , [selectedTags])      

    const changeTags = (tag: string, isSelected: boolean) => {
        setSelectedTags(prev =>
            isSelected ? [...prev, tag] : prev.filter(item => item !== tag)
        );
    }

    return (
        <article className={styles.filter}>
            {tags.map(tag =>
                <Tag key={tag.id} name={tag.name} changeTags={changeTags} />
            )}
        </article>
    )
};

export default Filter;