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
}) => {
  return (
    <main className={style.main}>
      <section className={style.sort}>
        <Categories category={category} setCategory={setCategory} />
        <Sort
          sort={sort}
          setSort={setSort}
          reverse={reverse}
          setReverse={setReverse}
        />
      </section>
      <PizzaList pizzas={pizzas} isLoading={isLoading} />
    </main>
  );
};

export default Main;
