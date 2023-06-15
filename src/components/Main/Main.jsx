import Search from '../Search/Search';
import Topics from '../Topics/Topics';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        {/* // Am I suppose to spearate the Search code to another component! */}
        <Search />
        <Topics />
      </div>
    </div>
  );
};

export default Main;
