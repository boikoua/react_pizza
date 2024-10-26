import { useContext } from 'react';
import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';
import { MainContext } from '../../context/mainContext';

const Categories = () => {
  // #region Context
  const context = useContext(MainContext);

  if (!context) return null;

  const { categoryValue, setCategoryValue, setPage } = context;
  // #endregion

  const handleChangeCategory = (value: number) => {
    setCategoryValue(value);
    setPage(1);
  };

  const showCategories = categories.map((item) => (
    <li
      className={cn(style.category, {
        [style.active]: categoryValue === item.value,
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
