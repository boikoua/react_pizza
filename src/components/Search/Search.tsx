import style from './Search.module.scss';
import { setPage, setSearch } from '../../redux/features/filterSlice';
import { useAppDispatch } from '../../redux/hooks';
import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

const Search = React.memo(() => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearch = useCallback(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 1000),
    []
  );

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
    dispatch(setPage(1));
  };

  const handleClickClear = () => {
    setValue('');
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
        value={value}
        onChange={handleChangeSearch}
      />
      {value && (
        <img
          className={style.clear}
          src={`${process.env.PUBLIC_URL}/img/clear.svg`}
          alt="Clear"
          onClick={handleClickClear}
        />
      )}
    </div>
  );
});

export default Search;
