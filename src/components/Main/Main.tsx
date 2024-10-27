import { useContext } from 'react';
import Categories from '../Categories';
import PizzaList from '../PizzaList';
import Search from '../Search';
import Sort from '../Sort';
import style from './Main.module.scss';
import { MainContext } from '../../context/mainContext';

const Main = () => {
  const context = useContext(MainContext);

  if (!context) return null;

  const { isError } = context;

  return (
    <main className={style.main}>
      {!isError && <Search />}
      <section className={style.sort}>
        <Categories />
        <Sort />
      </section>
      <PizzaList />
    </main>
  );
};

export default Main;
