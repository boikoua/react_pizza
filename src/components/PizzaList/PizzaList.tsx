import { Pizza } from '../../types/Pizza';
import Pagination from '../Pagination';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Skeleton';
import style from './PizzaList.module.scss';

type Props = {
  pizzas: Pizza[];
  isLoading: boolean;
  page: number;
  setPage: (val: number) => void;
};

const PizzaList: React.FC<Props> = ({ pizzas, isLoading, page, setPage }) => {
  const showPizzas = Array.isArray(pizzas)
    ? pizzas.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)
    : [];

  const showSkeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <section className={style.container}>
      <h2 className={style.title}>Усі піци</h2>

      <section className={style.pizzas}>
        {isLoading ? (
          showSkeletons
        ) : Array.isArray(pizzas) && pizzas.length > 0 ? (
          showPizzas
        ) : (
          <p className={style.error}>Нічого не знайдено...</p>
        )}
      </section>

      {Array.isArray(pizzas) && pizzas.length > 0 && (
        <Pagination page={page} setPage={setPage} />
      )}
    </section>
  );
};

export default PizzaList;
