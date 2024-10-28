import { Pizza } from '../../types/Pizza';
import style from './PizzaItem.module.scss';
import { useDispatch } from 'react-redux';
import { add, cartSelector } from '../../redux/features/cartSlice';
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';

type Props = {
  pizza: Pizza;
};

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const { id, imageUrl, name, price, desc } = pizza;

  const dispatch = useDispatch();
  const { cart } = useAppSelector(cartSelector);

  const handleAddPizza = (pizza: Pizza) => {
    dispatch(add(pizza));
  };

  const theSamePizza = cart.filter((item) => item.id === id).length;

  return (
    <article className={style.pizza}>
      <Link className={style.link} to={`/pizza/${id}`}>
        <img className={style.img} src={imageUrl} alt="Pizza" />
      </Link>

      <h3 className={style.title}>{name}</h3>
      <p className={style.desc}>{desc}</p>
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
