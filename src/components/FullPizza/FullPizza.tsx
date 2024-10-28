import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './FullPizza.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { dataSelector, fetchAllData } from '../../redux/features/dataSlice';
import { filterSelector } from '../../redux/features/filterSlice';
import ErrorPage from '../ErrorPage';
import { add, cartSelector } from '../../redux/features/cartSlice';

const FullPizza = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(dataSelector);
  const { category, search } = useAppSelector(filterSelector);
  const { cart } = useAppSelector(cartSelector);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAllData({ category, search }));
  }, [dispatch, category, search]);

  const pizza = items.find((p) => String(p.id) === id);

  if (!pizza) return null;

  const { id: ident, imageUrl, name, ingredients, price, desc } = pizza;

  const handleAddPizza = () => {
    dispatch(add(pizza));
  };

  const theSamePizza = cart.filter((item) => item.id === ident).length;

  return status !== 'error' ? (
    <div className={style.block}>
      <img className={style.img} src={imageUrl} alt={name} />
      <div className={style.content}>
        <h2 className={style.title}>{name}</h2>
        <h3 className={style.subtitle}>Інгридієнти:</h3>
        <ul className={style.items}>
          {ingredients.map((ingredient, index) => (
            <li className={style.item} key={index}>
              - {ingredient};
            </li>
          ))}
        </ul>
        <p className={style.desc}>{desc}</p>
        <p className={style.price}>{price} ₴</p>
        <button className={style.btn} onClick={handleAddPizza}>
          Додати до замовлення
          <span className={style.count}>{theSamePizza}</span>
        </button>
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default FullPizza;
