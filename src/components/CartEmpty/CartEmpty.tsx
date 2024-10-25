import { Link } from 'react-router-dom';
import style from './CartEmpty.module.scss';

const CartEmpty = () => {
  return (
    <section className={style.cart}>
      <h1 className={style.title}>Корзина пуста 👀</h1>
      <p className={style.text}>
        Ви ще не додали жодної піци для замовлення. Для того щоб це виправити,
        ви можете повернутись на головну сторінку натиснувши кнопку нижче.
      </p>
      <img className={style.img} src="./img/empty-cart.png" alt="Empty" />
      <Link to="/" className={style.btn}>
        На головну
      </Link>
    </section>
  );
};

export default CartEmpty;
