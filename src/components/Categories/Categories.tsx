import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';

type Props = {
  category: number;
  setCategory: (val: number) => void;
  setPage: (val: number) => void;
};

const Categories: React.FC<Props> = ({ category, setCategory, setPage }) => {
  const handleChangeCategory = (value: number) => {
    setCategory(value);
    setPage(1);
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
