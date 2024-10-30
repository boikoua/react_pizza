import { Link } from 'react-router-dom';
import style from './BasketButton.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { cartSelector } from '../../redux/features/cartSlice';
import React, { useEffect, useRef } from 'react';

const BasketButton = React.memo(() => {
  const { cart } = useAppSelector(cartSelector);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cart);
      localStorage.setItem('cart', json);
    }

    isMounted.current = true;
  }, [cart]);

  const totalPrice =
    cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

  return (
    <Link to="/cart" className={style.basket}>
      <span className={style.price}>{totalPrice} ₴</span>
      <span className={style.delimeter}></span>
      <div className={style.wrapper}>
        <img
          className={style.icon}
          src={`${process.env.PUBLIC_URL}/img/basket-icon.png`}
          alt="Basket"
        />
        <span className={style.count}>{cart.length}</span>
      </div>
    </Link>
  );
});

export default BasketButton;
