import style from './Search.module.scss';
import { setPage, setSearch } from '../../redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Search = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.filter.search);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
    dispatch(setPage(1));
  };

  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        placeholder="Пошук піци..."
        value={search}
        onChange={handleChangeSearch}
      />
      {search && (
        <img
          className={style.clear}
          src="./img/clear.svg"
          alt="Clear"
          onClick={() => dispatch(setSearch(''))}
        />
      )}
    </div>
  );
};

export default Search;
