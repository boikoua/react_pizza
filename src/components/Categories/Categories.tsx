import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';

type Props = {
  category: number;
  setCategory: (val: number) => void;
};

const Categories: React.FC<Props> = ({ category, setCategory }) => {
  const showCategories = categories.map((item) => (
    <li
      className={cn(style.category, {
        [style.active]: category === item.value,
      })}
      key={item.value}
      onClick={() => setCategory(item.value)}
    >
      {item.name}
    </li>
  ));

  return <ul className={style.categories}>{showCategories}</ul>;
};

export default Categories;
