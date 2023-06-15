import styles from './Input.module.css';

const Input = () => {
  return (
    <div className={styles.search}>
      <ion-icon name="search-outline" class={styles.searchIcon}></ion-icon>

      <input
        className={styles.input}
        type="text"
        name=""
        id=""
        placeholder="Search the website..."
      />
    </div>
  );
};

export default Input;
