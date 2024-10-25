import { useState } from 'react';
import { sortValues } from '../../api/sort';
import style from './Sort.module.scss';
import cn from 'classnames';

type Props = {
  sort: number;
  setSort: (val: number) => void;
  reverse: boolean;
  setReverse: (val: boolean) => void;
};

const Sort: React.FC<Props> = ({ sort, setSort, reverse, setReverse }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={style.sort}>
      <img
        className={cn(style.icon, { [style.reverse]: reverse })}
        src="./img/sort-icon.png"
        alt="Sort Direct"
        onClick={() => setReverse(!reverse)}
      />
      <p className={style.text}>
        Сортування по:{' '}
        <span className={style.category} onClick={() => setShow(!show)}>
          {sortValues[sort].title}
        </span>
      </p>
      {show && (
        <ul className={style.popup}>
          {sortValues.map((obj, index) => (
            <li
              className={style.option}
              key={index}
              onClick={() => {
                setSort(index);
                setShow(false);
              }}
            >
              {obj.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
