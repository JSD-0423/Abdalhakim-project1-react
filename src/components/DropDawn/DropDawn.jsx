/* eslint-disable react/prop-types */
import styles from './DropDawn.module.css';

const DropDawn = (props) => {
  return (
    <div className={styles.menu}>
      <label>{props.type}:</label>
      <div className={styles.select}>
        <select className={styles.selectElement} id="sort-by">
          <option value="default">Default</option>
          <option value="option1">Option1</option>
          <option value="option2">Option2</option>
        </select>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
    </div>
  );
};

export default DropDawn;
