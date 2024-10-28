import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './FullPizza.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { dataSelector, fetchAllData } from '../../redux/features/dataSlice';
import { filterSelector } from '../../redux/features/filterSlice';
import ErrorPage from '../ErrorPage';

const FullPizza = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(dataSelector);
  const { category, search } = useAppSelector(filterSelector);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAllData({ category, search }));
  }, [dispatch, category, search]);

  const pizza = items.find((p) => String(p.id) === id);

  return status !== 'error' ? (
    <div>FullPizza {pizza?.name}</div>
  ) : (
    <ErrorPage />
  );
};

export default FullPizza;
