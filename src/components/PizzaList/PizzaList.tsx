import { pizzasFromServer } from '../../api/pizzas';
import PizzaItem from '../PizzaItem';
import style from './PizzaList.module.scss';

type Props = {
  count: number;
  onClick: () => void;
};

const PizzaList: React.FC<Props> = ({ count, onClick }) => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Усі піци</h2>

      <section className={style.pizzas}>
        {pizzasFromServer.map((pizza) => (
          <PizzaItem
            key={pizza.id}
            pizza={pizza}
            count={count}
            onClick={onClick}
          />
        ))}
      </section>
    </section>
  );
};

export default PizzaList;
