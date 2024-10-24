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
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <PizzaItem key={num} count={count} onClick={onClick} />
        ))}
      </section>
    </section>
  );
};

export default PizzaList;
