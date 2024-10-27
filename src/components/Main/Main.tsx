import Categories from '../Categories';
import PizzaList from '../PizzaList';
import Search from '../Search';
import Sort from '../Sort';
import style from './Main.module.scss';
import { useAppSelector } from '../../redux/hooks';

const Main = () => {
  const { error } = useAppSelector((state) => state.pizza);

  return (
    <main className={style.main}>
      {!error && <Search />}
      <section className={style.sort}>
        <Categories />
        <Sort />
      </section>
      <PizzaList />
    </main>
  );
};

export default Main;
