export interface IAddress {
    id: number;
    title: string;
    address: string;
    mapUrl: string;
}

export interface IAddressListProps {
    addresses: IAddress[];
}