import DropDawn from '../DropDawn/DropDawn';
import Input from '../Input/Input';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input></Input>
      <div className={styles.searchFilters}>
        <DropDawn type="Sort by" />
        <DropDawn type="Filter by" />
      </div>
    </div>
  );
};

export default Search;
