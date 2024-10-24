import { pizzasFromServer } from '../../api/pizzas';
import PizzaItem from '../PizzaItem';
import style from './PizzaList.module.scss';

type Props = {};

const PizzaList: React.FC<Props> = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Усі піци</h2>

      <section className={style.pizzas}>
        {pizzasFromServer.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </section>
    </section>
  );
};

export default PizzaList;
