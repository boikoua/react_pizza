import React from 'react';
import style from './Search.module.scss';

type Props = {
  value: string;
  setValue: (val: string) => void;
  setPage: (val: number) => void;
};

const Search: React.FC<Props> = ({ value, setValue, setPage }) => {
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setPage(1);
  };

  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        placeholder="Пошук піци..."
        value={value}
        onChange={handleChangeSearch}
      />
      {value && (
        <img
          className={style.clear}
          src="./img/clear.svg"
          alt="Clear"
          onClick={() => setValue('')}
        />
      )}
    </div>
  );
};

export default Search;
