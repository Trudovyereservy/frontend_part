import { FC, useEffect, useState } from 'react';

import styles from './Filter.module.scss';
import Tag from './Tag/Tag';

import { IFilterProps } from './Filter.props';

const Filter: FC<IFilterProps> = ({ tags, posts, filterPosts }) => {
    const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

    useEffect(() => {
        filter()
    }, [selectedTags])

    const changeTags = (tag: string, state: boolean) => {
        if (state) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(
                selectedTags.filter(item => item !== tag)
            );
        }
    }

    const filter = () => {
        if (selectedTags.length != 0) {
            const filtredPosts = posts.filter((post) => post.tags.some(tag => selectedTags.includes(tag)))
            filterPosts(filtredPosts);
        } else {
            filterPosts(posts);
        }
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