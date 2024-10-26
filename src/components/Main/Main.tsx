import { Pizza } from '../../types/Pizza';
import Categories from '../Categories';
import PizzaList from '../PizzaList';
import Sort from '../Sort';
import style from './Main.module.scss';

type Props = {
  pizzas: Pizza[];
  sort: number;
  setSort: (val: number) => void;
  reverse: boolean;
  setReverse: (val: boolean) => void;
  isLoading: boolean;
  category: number;
  setCategory: (val: number) => void;
  page: number;
  setPage: (val: number) => void;
};

const Main: React.FC<Props> = ({
  pizzas,
  sort,
  setSort,
  reverse,
  setReverse,
  isLoading,
  category,
  setCategory,
  page,
  setPage,
}) => {
  return (
    <main className={style.main}>
      <section className={style.sort}>
        <Categories
          category={category}
          setCategory={setCategory}
          setPage={setPage}
        />
        <Sort
          sort={sort}
          setSort={setSort}
          reverse={reverse}
          setReverse={setReverse}
        />
      </section>
      <PizzaList
        pizzas={pizzas}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </main>
  );
};

export default Main;
