import { setPage } from '../../redux/features/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import style from './Pagination.module.scss';
import cn from 'classnames';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.filter);

  const showPages = [...new Array(5)].map((_, index) => (
    <li
      className={cn(style.item, { [style.active]: page === index + 1 })}
      key={index + 1}
      onClick={() => dispatch(setPage(index + 1))}
    >
      {index + 1}
    </li>
  ));

  return <ul className={style.items}>{showPages}</ul>;
};

export default Pagination;
