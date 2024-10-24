import { useState } from 'react';
import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const handlerChangeCategory = (num: number) => {
    setActiveCategory(num);
  };

  const showCategories = categories.map((category, index) => (
    <li
      className={cn(style.category, {
        [style.active]: activeCategory === index,
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
