import style from './Pagination.module.scss';
import cn from 'classnames';

type Props = {
  page: number;
  setPage: (val: number) => void;
};

const Pagination: React.FC<Props> = ({ page, setPage }) => {
  const showPages = [...new Array(5)].map((_, index) => (
    <li
      className={cn(style.item, { [style.active]: page === index + 1 })}
      key={index + 1}
      onClick={() => setPage(index + 1)}
    >
      {index + 1}
    </li>
  ));
  return <ul className={style.items}>{showPages}</ul>;
};

export default Pagination;
