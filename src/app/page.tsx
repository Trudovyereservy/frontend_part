import styles from './page.module.scss';
// import '../components/main-banner/'

import { MainBanner } from '@/components/main-banner/main-banner';

export default function Home() {
  return (
    <div className={styles.mainbanner__wrapper}>
      <MainBanner />
    </div>
  );
}
