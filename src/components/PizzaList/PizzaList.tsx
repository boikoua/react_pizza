import Pagination from '../Pagination';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Skeleton';
import style from './PizzaList.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { pizzaSelector } from '../../redux/features/pizzaSlice';

const PizzaList = () => {
  const { pizzas, loading } = useAppSelector(pizzaSelector);

  const showPizzas = Array.isArray(pizzas)
    ? pizzas.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)
    : [];

  const showSkeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <section className={style.container}>
      <h2 className={style.title}>Доступні піци</h2>

      <section className={style.pizzas}>
        {loading ? (
          showSkeletons
        ) : Array.isArray(pizzas) && pizzas.length > 0 ? (
          showPizzas
        ) : (
          <p className={style.error}>Нічого не знайдено...</p>
        )}
      </section>

      {Array.isArray(pizzas) && pizzas.length > 0 && <Pagination />}
    </section>
  );
};

export default PizzaList;
