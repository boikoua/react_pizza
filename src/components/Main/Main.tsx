import Categories from '../Categories';
import PizzaList from '../PizzaList';
import Sort from '../Sort';
import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.main}>
      <section className={style.sort}>
        <Categories />
        <Sort />
      </section>
      <PizzaList />
    </main>
  );
};

export default Main;
