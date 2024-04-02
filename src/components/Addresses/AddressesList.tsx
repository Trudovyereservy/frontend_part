import { FC } from "react";
import styles from "./addressesList.module.scss";

import { IAddressListProps } from "./AddressesList.props";
import AddressItem from "./AddressItem/AddressItem";


const Addresses: FC<IAddressListProps> = ({ addresses, onClick }) => {
    return (
        <article className={styles.addresses}>
            {addresses.map(address =>
                <AddressItem key={address.id} address={address} onClick={onClick}/>
            )}
        </article>
    );
};

export default Addresses;