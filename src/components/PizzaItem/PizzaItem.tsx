import { useState } from 'react';
import { Pizza } from '../../types/Pizza';
import style from './PizzaItem.module.scss';
import cn from 'classnames';

type Props = {
  pizza: Pizza;
};

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const { imageUrl, name, sizes, price, desc } = pizza;

  const [activeSize, setActiveSize] = useState(0);

  const [count, setCount] = useState(0);

  return (
    <article className={style.pizza}>
      <img className={style.img} src={imageUrl} alt="Pizza" />
      <h3 className={style.title}>{name}</h3>
      <p className={style.desc}>{desc}</p>
      <ul className={style.size}>
        {sizes.map((size, index) => (
          <li
            className={cn(style.radius, {
              [style.active]: activeSize === index,
            })}
            key={size}
            onClick={() => setActiveSize(index)}
          >
            {`${size} см.`}{' '}
          </li>
        ))}
      </ul>
      <div className={style.footer}>
        <p className={style.price}>{price} ₴</p>
        <button className={style.btn} onClick={() => setCount(count + 1)}>
          Додати
          <span className={style.count}>{count}</span>
        </button>
      </div>
    </article>
  );
};

export default PizzaItem;
