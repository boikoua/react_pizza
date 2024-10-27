import { useEffect, useRef, useState } from 'react';
import { sortValues } from '../../api/sort';
import style from './Sort.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setReverse, setSort } from '../../redux/features/filterSlice';

const Sort = () => {
  const [show, setShow] = useState(false);

  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closePopupFunc = (event: MouseEvent) => {
      if (sortRef.current) {
        if (!event.composedPath().includes(sortRef.current)) {
          setShow(false);
        }
      }
    };

    document.body.addEventListener('click', closePopupFunc);

    return () => {
      document.body.removeEventListener('click', closePopupFunc);
    };
  }, []);

  const dispatch = useAppDispatch();
  const { sort, reverse } = useAppSelector((state) => state.filter);

  const handleChangeSort = (index: number) => {
    dispatch(setSort(index));
    setShow(false);
  };

  const handleToggleReverse = () => {
    dispatch(setReverse(!reverse));
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
    <div className={style.sort} ref={sortRef}>
      <img
        className={cn(style.icon, { [style.reverse]: reverse })}
        src={`${process.env.PUBLIC_URL}/img/sort-icon.png`}
        alt="Sort Direct"
        onClick={handleToggleReverse}
      />
      <p className={style.text}>
        Сортування по:{' '}
        <span className={style.category} onClick={handleShowPopup}>
          {sortValues[sort].title}
        </span>
      </p>
      {show && <ul className={style.popup}>{showSort}</ul>}
    </div>
  );
};

export default Sort;
