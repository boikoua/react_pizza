import Categories from '../Categories';
import PizzaList from '../PizzaList';
import Search from '../Search';
import Sort from '../Sort';
import style from './Main.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { pizzaSelector } from '../../redux/features/pizzaSlice';

const Main = () => {
  const { error } = useAppSelector(pizzaSelector);

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
