import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import cn from 'classnames';

type Props = {
  category: number;
  setCategory: (val: number) => void;
};

const Categories: React.FC<Props> = ({ category, setCategory }) => {
  const showCategories = categories.map((item, index) => (
    <li
      className={cn(style.category, {
        [style.active]: category === index,
      })}
      key={index}
      onClick={() => setCategory(index)}
    >
      {item}
    </li>
  ));

  return <ul className={style.categories}>{showCategories}</ul>;
};

export default Categories;
