import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <span className={styles.shape}></span>
        <span className={styles.shape}></span>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerHeader}>Welcome to our website!</h2>
          <p className={styles.bannerParagraph}>
            We have a new design that fresh, modern, and easy to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
