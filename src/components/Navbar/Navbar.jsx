import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.mainTitle}>Web Topics</h1>
      <ul className={styles.list}>
        <li>
          <ion-button aria-label="Theme" class={styles.ionBtn}>
            <ion-icon name="moon-outline" aria-hidden="true"></ion-icon>
            <span className="dark-mode">Dark Mode</span>
          </ion-button>
        </li>
        <li>
          <ion-button aria-label="Favorite" class={styles.ionBtn}>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            <span>Favourites</span>
          </ion-button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
