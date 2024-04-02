import { FC } from "react";
import styles from "./map.module.scss";

interface MapProps {
    mapUrl: string;
}

const Map: FC<MapProps> = ({ mapUrl }) => {
    return (
        <article className={styles.map}>
            <iframe className={styles.map__iframe}
                src={mapUrl}
                loading="lazy" ></iframe>
        </article>
    );
};

export { Map };