import { Link } from 'react-router-dom';
import style from './BasketButton.module.scss';

const BasketButton = () => {
  return (
    <Link to="/cart" className={style.basket}>
      <span className={style.price}>500 ₴</span>
      <span className={style.delimeter}></span>
      <div className={style.wrapper}>
        <img className={style.icon} src="./img/basket-icon.png" alt="Basket" />
        <span className={style.count}>3</span>
      </div>
    </Link>
  );
};

export default BasketButton;
