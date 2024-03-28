import styles from './SwiperPost.module.scss';

interface ISwiperPostsProps {
  post: string;
  name: string;
  description: string;
}

export const SwiperPost = ({ post, name, description }: ISwiperPostsProps) => {
  return (
    <article>
      <p className={styles.feedbackCard__textPost}>{post}</p>
      <div className={styles.feedbackCard__about}>
        <h4 className={styles.feedbackCard__textName}>{name}</h4>
        <p className={styles.feedbackCard__textDescription}>{description}</p>
      </div>
    </article>
  );
};
