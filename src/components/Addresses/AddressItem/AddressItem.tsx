import { FC } from "react";
import styles from "./addressItem.module.scss";

import { IAddress } from "../AddressesList.props";

interface AddressProps {
    address: IAddress
}

const AddressItem: FC<AddressProps> = ({ address }) => {
    return (
        <div className={styles.addressItem}>
            <h3 className={styles.addressItem__title}>{address.title}</h3>
            <p className={styles.addressItem__address}>{address.address}</p>
        </div>
    );
};

export default AddressItem;