import React from 'react';
import { dataSelector } from '../../redux/features/dataSlice';
import { filterSelector, setPage } from '../../redux/features/filterSlice';
import { pizzaSelector } from '../../redux/features/pizzaSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import style from './Pagination.module.scss';
import cn from 'classnames';

const Pagination = React.memo(() => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(filterSelector);
  const { items } = useAppSelector(dataSelector);
  const { limit } = useAppSelector(pizzaSelector);

  const countPages = Math.ceil(items.length / limit);

  const showPages = [...new Array(countPages)].map((_, index) => (
    <li
      className={cn(style.item, { [style.active]: page === index + 1 })}
      key={index + 1}
      onClick={() => dispatch(setPage(index + 1))}
    >
      {index + 1}
    </li>
  ));

  return <ul className={style.items}>{showPages}</ul>;
});

export default Pagination;
