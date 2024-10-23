import { categories } from '../../api/categories';
import style from './Category.module.scss';

const Category = () => {
  const showCategories = categories.map((category, index) => (
    <li className={style.category} key={index}>
      {category}
    </li>
  ));

  return <ul className={style.categories}>{showCategories}</ul>;
};

export default Category;
