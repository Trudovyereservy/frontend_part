import { FC, useState } from 'react';

import styles from './Tag.module.scss';
import classNames from 'classnames';

import { ITagProps } from './Tag.props';

const Tag: FC<ITagProps> = ({ name, changeTags }) => {
    const [selected, setSelected] = useState<boolean>(false);

    const handleSelected = () => {
        const nextState = !selected;
        setSelected(!selected);
        changeTags(name, nextState);
    }

    return (
        <div className={classNames(styles.tag, {[styles.tag_active]: selected})} onClick={handleSelected}>{name}</div>
    )
};

export default Tag;