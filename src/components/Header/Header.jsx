import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
