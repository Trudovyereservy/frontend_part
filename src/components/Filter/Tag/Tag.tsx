import { FC, useState } from 'react';

import classNames from 'classnames';

import { ITagProps } from './Tag.props';

import styles from './Tag.module.scss';

const Tag: FC<ITagProps> = ({ name, changeTags }) => {
    const [isSelected, setSelected] = useState<boolean>(false);

    const handleSelected = () => {
        changeTags(name, !isSelected);
        setSelected(!isSelected);
    }

    return (
        <div className={classNames(styles.tag, { [styles.tag_active]: isSelected })} onClick={handleSelected}>{name}</div>
    )
};

export default Tag;