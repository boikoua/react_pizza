import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { sortValues } from './api/sort';
import { fetchData, pizzaSelector } from './redux/features/pizzaSlice';
import { dataSelector, fetchAllData } from './redux/features/dataSlice';
import { setPage } from './redux/features/filterSlice';
import style from './App.module.scss';

import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import FullPizza from './components/FullPizza/FullPizza';
import Form from './components/Form';

const App = () => {
  const dispatch = useAppDispatch();
  const { error, limit } = useAppSelector(pizzaSelector);
  const { search, page, category, sort, reverse } = useAppSelector(
    (state) => state.filter
  );
  const { items, status } = useAppSelector(dataSelector);

  useEffect(() => {
    dispatch(fetchAllData({ category, search }));
  }, [dispatch, category, search]);

  useEffect(() => {
    const totalPages = Math.ceil(items.length / limit);

    if (page > totalPages) {
      dispatch(setPage(1));
    }
  }, [items, page, limit, dispatch]);

  useEffect(() => {
    dispatch(
      fetchData({
        sort: sortValues[sort].flag,
        category,
        search,
        reverse,
        page,
      })
    );
  }, [dispatch, sort, search, category, reverse, page]);

  return (
    <div className={style.app}>
      <Header />
      {(status === 'error' || error) && <ErrorPage />}
      {status !== 'error' && !error && (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
