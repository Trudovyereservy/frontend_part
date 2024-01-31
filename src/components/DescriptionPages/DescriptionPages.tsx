import { IDescriptionPagesProps } from './DescriptionPages.props';
import styles from './DescriptionPages.module.scss';
import { descriptionPages } from '@/utils/constans';
import { usePathname } from 'next/navigation';

const DescriptionPages = () => {
  const pathName = usePathname();
  const blockData = descriptionPages.find((item) => item.route === pathName);
  
  if (!blockData) {
    return null; 
  }
  
  console.log(pathName);
  console.log(typeof pathName);
  console.log(descriptionPages[0].route);

  return (
    <>
      <h2 className={styles.description__title}>{blockData.page}</h2>
      <p className={styles.description__text}>{blockData.content}</p>
    </>
  );
};
export { DescriptionPages };
