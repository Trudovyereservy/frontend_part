import { cardsCompanyInfo } from '../../utils/constants';
import SwiperGalleryProvider from '../ProviderComponents/SwiperGalleryProvider';

import { CompanyInfoItem } from './CompanyInfoItem/CompanyInfoItem';

import styles from './CompanyInfo.module.scss';

const CompanyInfo = () => {

  return (
    <section className={styles.companyinfo}>
      <h2 className={styles.companyinfo__title}>Пример текста</h2>
      <article className={styles.companyinfo__wrapper}>
        <div className={styles.companyinfo__info}>
          <div className={styles.companyinfo__description}>Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста</div>
          <div className={styles.companyinfo__items}>
            {cardsCompanyInfo.map((item) => (
              <CompanyInfoItem
                key={item.id}
                textItem={item.textItem}
                subtitle={item.subtitle}
              />
            )
            )}
          </div>
        </div>
        <SwiperGalleryProvider />
      </article>
    </section>
  );
};
export { CompanyInfo };
