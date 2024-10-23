import style from './PizzaItem.module.scss';

const PizzaItem = () => {
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
        <button className={style.btn}>
          Додати
          <span className={style.count}>2</span>
        </button>
      </div>
    </article>
  );
};

export default PizzaItem;
