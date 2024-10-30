import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  filterSelector,
  setCategory,
  setPage,
} from '../../redux/features/filterSlice';
import React, { useCallback } from 'react';

const Categories = React.memo(() => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(filterSelector);

  const handleChangeCategory = useCallback(
    (value: number) => {
      dispatch(setCategory(value));
      dispatch(setPage(1));
    },
    [dispatch]
  );

  const showCategories = categories.map((item) => (
    <li
      className={cn(style.category, {
        [style.active]: category === item.value,
      })}
      key={item.value}
      onClick={() => handleChangeCategory(item.value)}
    >
      {item.name}
    </li>
  ));

  return <ul className={style.categories}>{showCategories}</ul>;
});

export default Categories;
