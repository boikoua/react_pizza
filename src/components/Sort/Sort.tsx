import { useContext, useState } from 'react';
import { sortValues } from '../../api/sort';
import style from './Sort.module.scss';
import cn from 'classnames';
import { MainContext } from '../../context/mainContext';

const Sort = () => {
  const [show, setShow] = useState(false);

  // #region Context
  const context = useContext(MainContext);

  if (!context) return null;

  const { sortValue, setSortValue, reverse, setReverse } = context;
  // #endregion

  const handleChangeSort = (index: number) => {
    setSortValue(index);
    setShow(false);
  };

  const handleToggleReverse = () => {
    setReverse(!reverse);
  };

  const handleShowPopup = () => {
    setShow(!show);
  };

  const showSort = sortValues.map((obj, index) => (
    <li
      className={style.option}
      key={index}
      onClick={() => handleChangeSort(index)}
    >
      {obj.title}
    </li>
  ));

  return (
    <div className={style.sort}>
      <img
        className={cn(style.icon, { [style.reverse]: reverse })}
        src="./img/sort-icon.png"
        alt="Sort Direct"
        onClick={handleToggleReverse}
      />
      <p className={style.text}>
        Сортування по:{' '}
        <span className={style.category} onClick={handleShowPopup}>
          {sortValues[sortValue].title}
        </span>
      </p>
      {show && <ul className={style.popup}>{showSort}</ul>}
    </div>
  );
};

export default Sort;
