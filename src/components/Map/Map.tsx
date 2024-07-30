import { FC } from 'react';

import styles from './Map.module.scss';
12;
interface MapProps {
  mapUrl: string;
}

const Map: FC<MapProps> = ({ mapUrl }) => (
  <article className={styles.map}>
    <iframe className={styles.map__iframe} src={mapUrl} loading="lazy"></iframe>
  </article>
);

export default Map;
