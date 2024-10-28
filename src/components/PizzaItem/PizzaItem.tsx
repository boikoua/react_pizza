import { useState } from 'react';
import { Pizza } from '../../types/Pizza';
import style from './PizzaItem.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { add, cartSelector } from '../../redux/features/cartSlice';
import { useAppSelector } from '../../redux/hooks';

type Props = {
  pizza: Pizza;
};

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const { id, imageUrl, name, sizes, price, desc } = pizza;
  const [activeSize, setActiveSize] = useState(0);

  const dispatch = useDispatch();
  const { cart } = useAppSelector(cartSelector);

  const handleAddPizza = (pizza: Pizza) => {
    dispatch(add(pizza));
  };

  const theSamePizza = cart.filter((item) => item.id === id).length;

  const showSizes = sizes.map((size, index) => (
    <li
      className={cn(style.radius, {
        [style.active]: activeSize === index,
      })}
      key={size}
      onClick={() => setActiveSize(index)}
    >
      {`${size} см.`}
    </li>
  ));

  return (
    <article className={style.pizza}>
      <img className={style.img} src={imageUrl} alt="Pizza" />
      <h3 className={style.title}>{name}</h3>
      <p className={style.desc}>{desc}</p>
      <ul className={style.size}>{showSizes}</ul>
      <div className={style.footer}>
        <p className={style.price}>{price} ₴</p>
        <button className={style.btn} onClick={() => handleAddPizza(pizza)}>
          Додати
          <span className={style.count}>{theSamePizza}</span>
        </button>
      </div>
    </article>
  );
};

export default PizzaItem;
