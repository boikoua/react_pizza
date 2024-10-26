import style from './Search.module.scss';
import { setPage, setSearch } from '../../redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useRef } from 'react';

const Search = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.filter.search);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
    dispatch(setPage(1));
  };

  const handleClickClear = () => {
    dispatch(setSearch(''));
    inputRef.current?.focus();
  };

  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        placeholder="Пошук піци..."
        ref={inputRef}
        value={search}
        onChange={handleChangeSearch}
      />
      {search && (
        <img
          className={style.clear}
          src="./img/clear.svg"
          alt="Clear"
          onClick={handleClickClear}
        />
      )}
    </div>
  );
};

export default Search;
