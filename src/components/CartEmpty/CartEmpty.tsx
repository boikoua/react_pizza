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
      <button className={style.btn}>На головну</button>
    </section>
  );
};

export default CartEmpty;
