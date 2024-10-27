import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { sortValues } from './api/sort';
import { fetchData } from './redux/features/pizzaSlice';
import style from './App.module.scss';

import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.pizza);
  const { search, page, category, sort, reverse } = useAppSelector(
    (state) => state.filter
  );

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
      {error && <ErrorPage />}
      {!error && (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
