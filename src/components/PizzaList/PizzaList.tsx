import PizzaItem from '../PizzaItem';
import style from './PizzaList.module.scss';
const PizzaList = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Усі піци</h2>

      <section className={style.pizzas}>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </section>
    </section>
  );
};

export default PizzaList;
