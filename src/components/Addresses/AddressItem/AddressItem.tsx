import { FC } from "react";
import styles from "./addressItem.module.scss";

import { IAddress } from "../AddressesList.props";

interface AddressProps {
    address: IAddress;
    onClick: (arg0: string) => void;
}

const AddressItem: FC<AddressProps> = ({ address, onClick }) => {
    return (
        <div className={styles.addressItem} >
            <h3 className={styles.addressItem__title} onClick={() => onClick(address.mapUrl)}>{address.title}</h3>
            <p className={styles.addressItem__address}>{address.address}</p>
        </div>
    );
};

export default AddressItem;