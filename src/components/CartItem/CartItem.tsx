import { add, remove, removeOne } from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Pizza } from '../../types/Pizza';
import style from './CartItem.module.scss';

type Props = {
  pizza: Pizza;
};

const CartItem: React.FC<Props> = ({ pizza }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const { id, name, price } = pizza;

  const theSamePizzas = cart.filter((pizza) => pizza.id === id).length;

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id));
  };

  const handleRemoveOne = (id: number) => {
    dispatch(removeOne(id));
  };

  const handleAddOne = (pizza: Pizza) => {
    dispatch(add(pizza));
  };

  return (
    <li className={style.item}>
      <img className={style.pizza} src={pizza.imageUrl} alt="Pizza" />
      <h2 className={style.itemTitle}>{name}</h2>
      <div className={style.counter}>
        <span className={style.minus} onClick={() => handleRemoveOne(id)}>
          -
        </span>
        <span className={style.count}>{theSamePizzas}</span>
        <span className={style.plus} onClick={() => handleAddOne(pizza)}>
          +
        </span>
      </div>
      <span className={style.price}>{price * theSamePizzas} ₴</span>
      <span className={style.delete} onClick={() => handleRemoveItem(id)}>
        +
      </span>
    </li>
  );
};

export default CartItem;
