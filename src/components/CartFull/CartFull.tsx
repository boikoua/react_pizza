import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import style from './CartFull.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clear } from '../../redux/features/cartSlice';
import { Pizza } from '../../types/Pizza';

const CartFull = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const totalPrice =
    cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

  const handleClearCart = () => {
    dispatch(clear());
  };

  const uniqPizza: Pizza[] = Array.from(
    new Map(cart.map((pizza) => [pizza.id, pizza])).values()
  );

  const showPizzas = [...uniqPizza]
    .sort((p1, p2) => p1.name.localeCompare(p2.name))
    .map((pizza) => <CartItem key={pizza.id} pizza={pizza} />);

  return (
    <section className={style.cart}>
      <div className={style.top}>
        <div className={style.title}>
          <img
            className={style.icon}
            src={`${process.env.PUBLIC_URL}/img/cart-icon.png`}
            alt="cart"
          />
          <h2 className={style.title}>Корзина</h2>
        </div>
        <button className={style.clear} onClick={handleClearCart}>
          Очистити корзину
        </button>
      </div>
      <ul className={style.list}>{showPizzas}</ul>
      <div className={style.result}>
        <p className={style.resultPizza}>
          Всього піц: <span>{cart.length} шт.</span>
        </p>
        <p className={style.resultSum}>
          Сума замовлення: <span>{totalPrice} ₴</span>
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
