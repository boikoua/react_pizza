import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import style from './CartFull.module.scss';

const CartFull = () => {
  return (
    <section className={style.cart}>
      <div className={style.top}>
        <div className={style.title}>
          <img className={style.icon} src="./img/cart-icon.png" alt="cart" />
          <h2 className={style.title}>Корзина</h2>
        </div>
        <button className={style.clear}>Очистити корзину</button>
      </div>
      <ul className={style.list}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div className={style.result}>
        <p className={style.resultPizza}>
          Всього піц: <span>3 шт.</span>
        </p>
        <p className={style.resultSum}>
          Сума замовлення: <span>1000 ₴</span>
        </p>
      </div>
      <div className={style.btns}>
        <Link to="/" className={style.back}>
          Повернутись назад
        </Link>
        <button className={style.pay}>Сплатити замовлення</button>
      </div>
    </section>
  );
};

export default CartFull;
