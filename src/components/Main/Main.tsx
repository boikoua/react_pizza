import Category from '../Category';
import PizzaList from '../PizzaList';
import Sort from '../Sort';
import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.main}>
      <section className={style.sort}>
        <Category />
        <Sort />
      </section>
      <PizzaList />
    </main>
  );
};

export default Main;
