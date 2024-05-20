import SwiperGalleryProvider from '../ProviderComponents/SwiperGalleryProvider';

import styles from './CompanyInfo.module.scss';

const CompanyInfo = () => {
  return (
    <article className={styles.companyinfo__wrapper}>
      <SwiperGalleryProvider />
    </article>
  );
};
export { CompanyInfo };
