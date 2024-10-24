import { Pizza } from '../../types/Pizza';
import style from './PizzaItem.module.scss';

type Props = {
  pizza: Pizza;
  count: number;
  onClick: () => void;
};

const PizzaItem: React.FC<Props> = ({ pizza, count, onClick }) => {
  const { imageUrl, name, sizes, price, desc } = pizza;

  return (
    <article className={style.pizza}>
      <img className={style.img} src={imageUrl} alt="Pizza" />
      <h3 className={style.title}>{name}</h3>
      <p className={style.desc}>{desc}</p>
      <ul className={style.size}>
        {sizes.map((size) => (
          <li className={style.radius} key={size}>
            {`${size} см.`}{' '}
          </li>
        ))}
      </ul>
      <div className={style.footer}>
        <p className={style.price}>{price} ₴</p>
        <button className={style.btn} onClick={onClick}>
          Додати
          <span className={style.count}>{count}</span>
        </button>
      </div>
    </article>
  );
};

export default PizzaItem;
