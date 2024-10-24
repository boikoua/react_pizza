import { Pizza } from '../../types/Pizza';
import PizzaItem from '../PizzaItem';
import style from './PizzaList.module.scss';

type Props = {
  pizzas: Pizza[];
};

const PizzaList: React.FC<Props> = ({ pizzas }) => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Усі піци</h2>

      <section className={style.pizzas}>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </section>
    </section>
  );
};

export default PizzaList;
