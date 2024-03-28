import styles from './page.module.scss';
import { MainBanner } from '@/components/main-banner/main-banner';
import { Faq } from '@/components/Faq/Faq';
import Form from '@/components/Form/Form';
import { CardsList } from '@/components/CardsList/CardsList';
import SwiperProvider from '@/components/ProviderComponents/SwiperProvider';

export default function Home() {
  return (
    <main className={styles.mainbanner__wrapper}>
      <MainBanner />
      <CardsList />
      <SwiperProvider />
      <Form />
      <Faq />
    </main>
  );
}
