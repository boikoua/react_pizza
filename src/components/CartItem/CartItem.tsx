import style from './CartItem.module.scss';

const CartItem = () => {
  return (
    <li className={style.item}>
      <img className={style.pizza} src="./img/pizza.png" alt="Pizza" />
      <h2 className={style.itemTitle}>Сирна піца</h2>
      <div className={style.counter}>
        <span className={style.minus}>-</span>
        <span className={style.count}>3</span>
        <span className={style.plus}>+</span>
      </div>
      <span className={style.price}>400 ₴</span>
      <span className={style.delete}>+</span>
    </li>
  );
};

export default CartItem;
