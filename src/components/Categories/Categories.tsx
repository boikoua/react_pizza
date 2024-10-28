import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  filterSelector,
  setCategory,
  setPage,
} from '../../redux/features/filterSlice';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(filterSelector);

  const handleChangeCategory = (value: number) => {
    dispatch(setCategory(value));
    dispatch(setPage(1));
  };

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
};

export default Categories;
