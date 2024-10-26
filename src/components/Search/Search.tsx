import { useContext } from 'react';
import style from './Search.module.scss';
import { SearchContext } from '../../context/searchContext';

const Search = () => {
  // #region Context
  const context = useContext(SearchContext);

  if (!context) return null;

  const { searchValue, setSearchValue, setPage } = context;
  // #endregion

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setPage(1);
  };

  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        placeholder="Пошук піци..."
        value={searchValue}
        onChange={handleChangeSearch}
      />
      {searchValue && (
        <img
          className={style.clear}
          src="./img/clear.svg"
          alt="Clear"
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
};

export default Search;
