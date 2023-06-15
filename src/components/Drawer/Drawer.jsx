import styles from './Drawer.module.css';
import ajax from '../../assets/ajax.gif';

const Drawer = () => {
  return (
    <section className={styles.drawer} aria-labelledby="Favorite-section">
      <div className="container">
        <h3 className={styles.drawerTitle} aria-label="My Favourite Topic">
          My Favourite Topic
        </h3>
        <div className={styles.drawerCards}>
          <div className={styles.drawerCard}>
            <img
              src={ajax}
              className={styles.drawerImg}
              height="100px"
              alt=""
            />
            <div className={styles.cardInfo}>
              <h2 className={styles.title}>React</h2>
              <div className={styles.rate}>
                <ion-icon class={styles.ionIcon} name="star"></ion-icon>
                <ion-icon class={styles.ionIcon} name="star"></ion-icon>
                <ion-icon class={styles.ionIcon} name="star"></ion-icon>
                <ion-icon class={styles.ionIcon} name="star"></ion-icon>
                <ion-icon class={styles.ionIcon} name="star-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drawer;
