import { useState } from 'react';
import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';

const Categories = () => {
  const [selectCategory, setSelectCategory] = useState(0);

  const handlerChangeCategory = (num: number) => {
    setSelectCategory(num);
  };

  const showCategories = categories.map((category, index) => (
    <li
      className={cn(style.category, {
        [style.active]: selectCategory === index,
      })}
      key={index}
      onClick={() => handlerChangeCategory(index)}
    >
      {category}
    </li>
  ));

  return <ul className={style.categories}>{showCategories}</ul>;
};

export default Categories;
