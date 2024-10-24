import style from './PizzaItem.module.scss';

type Props = {
  count: number;
  onClick: () => void;
};

const PizzaItem: React.FC<Props> = ({ count, onClick }) => {
  return (
    <article className={style.pizza}>
      <img className={style.img} src="./img/pizza.png" alt="Pizza" />
      <h3 className={style.title}>Сирна піца</h3>
      <ul className={style.size}>
        <li className={style.radius}>26 см.</li>
        <li className={style.radius}>30 см.</li>
        <li className={style.radius}>40 см.</li>
      </ul>
      <div className={style.footer}>
        <p className={style.price}>400 ₴</p>
        <button className={style.btn} onClick={onClick}>
          Додати
          <span className={style.count}>{count}</span>
        </button>
      </div>
    </article>
  );
};

export default PizzaItem;
