import { Pizza } from '../../types/Pizza';
import PizzaItem from '../PizzaItem';
import Skeleton from '../Skeleton';
import style from './PizzaList.module.scss';

type Props = {
  pizzas: Pizza[];
  isLoading: boolean;
};

const PizzaList: React.FC<Props> = ({ pizzas, isLoading }) => {
  const showPizzas = pizzas.map((pizza) => (
    <PizzaItem key={pizza.id} pizza={pizza} />
  ));

  const showSkeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <section className={style.container}>
      <h2 className={style.title}>Усі піци</h2>

      <section className={style.pizzas}>
        {isLoading ? showSkeletons : showPizzas}
      </section>
    </section>
  );
};

export default PizzaList;
