import styles from './Map.module.scss';
import { FC } from 'react';





  interface MapProps {
  mapUrl: string;
}

const Map: FC<MapProps> = ({ mapUrl }) => (
  <article className={styles.map}>
    <iframe className={styles.map__iframe} src={mapUrl} loading="lazy"></iframe>
  </article>
);

export default Map;
