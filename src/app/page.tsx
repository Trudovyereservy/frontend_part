import { CardsList } from '@/components/CardsList/CardsList';
import { CardsNews } from '@/components/CardsNews/CardsNews';
import { Faq } from '@/components/Faq/Faq';
import Form from '@/components/Form/Form';
import { MainBanner } from '@/components/main-banner/main-banner';
import SwiperProvider from '@/components/ProviderComponents/SwiperProvider';
// import SwiperGalleryProvider from '@/components/ProviderComponents/SwiperGalleryProvider';
import { CompanyInfo } from '@/components/CompanyInfo/CompanyInfo';

import { cardsNewsMain } from '../utils/constants';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.mainbanner__wrapper}>
        <MainBanner />
        {/* <SwiperGalleryProvider /> */}
        <CompanyInfo />
        <CardsList />
        <SwiperProvider />
        <Form />
        <Faq />
        <CardsNews cardsNews={cardsNewsMain} />
      </div>
    </>
  );
}
