import Categories from '../Categories';
import PizzaList from '../PizzaList';
import Sort from '../Sort';
import style from './Main.module.scss';

type Props = {
  count: number;
  onClick: () => void;
};

const Main: React.FC<Props> = ({ count, onClick }) => {
  return (
    <main className={style.main}>
      <section className={style.sort}>
        <Categories />
        <Sort />
      </section>
      <PizzaList count={count} onClick={onClick} />
    </main>
  );
};

export default Main;
