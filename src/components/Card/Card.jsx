/* eslint-disable react/prop-types */
import styles from './Card.module.css';

const Card = ({ id, image, preTitle, title, author }) => {
  return (
    <article className={styles.card} id={id}>
      <a className={styles.link}>
        <img
          src={image}
          className={styles.cardImg}
          width="240px"
          height="130px"
        />
        <div className={styles.cardInfo}>
          <h3 className={styles.preTitle}>{preTitle}</h3>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.rate}>
            <ion-icon class={styles.rateIcon} name="star"></ion-icon>
            <ion-icon class={styles.rateIcon} name="star"></ion-icon>
            <ion-icon class={styles.rateIcon} name="star"></ion-icon>
            <ion-icon class={styles.rateIcon} name="star"></ion-icon>
            <ion-icon class={styles.rateIcon} name="star-outline"></ion-icon>
          </div>
          <p className="author">
            Author: <span className="author-name">{author}</span>
          </p>
        </div>
      </a>
    </article>
  );
};

export default Card;
