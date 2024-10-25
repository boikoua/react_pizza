import React from 'react';
import style from './Search.module.scss';

type Props = {
  value: string;
  setValue: (val: string) => void;
};

const Search: React.FC<Props> = ({ value, setValue }) => {
  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        placeholder="Пошук піци..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
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
