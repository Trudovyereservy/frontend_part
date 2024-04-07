import { TPost } from '@/components/SwiperFeedbacks/FeedbackTypes';

import styles from './SwiperPost.module.scss';
// import './SwiperPost.module.scss';


export const SwiperPost = ({ post, name, description }: TPost) => {
  return (
    <article className={styles.feedbackCard}>
      <p className={styles.feedbackCard__textPost}>{post}</p>
      <div className={styles.feedbackCard__about}>
        <h4 className={styles.feedbackCard__textName}>{name}</h4>
        {/* <h4 className="feedbackCard__textName">{name}</h4> */}
        <p className={styles.feedbackCard__textDescription}>{description}</p>
      </div>
    </article>
  );
};
