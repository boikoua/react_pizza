import { useParams } from 'react-router-dom';
import style from './FullPizza.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { dataSelector, fetchAllData } from '../../redux/features/dataSlice';
import { useEffect } from 'react';
import { filterSelector } from '../../redux/features/filterSlice';

const FullPizza = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(dataSelector);
  const { category, search } = useAppSelector(filterSelector);

  useEffect(() => {
    dispatch(fetchAllData({ category, search }));
  }, [dispatch, category, search]);

  const pizza = data.find((p) => String(p.id) === id);

  return <div>FullPizza {pizza?.name}</div>;
};

export default FullPizza;
