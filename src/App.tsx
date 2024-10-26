import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { sortValues } from './api/sort';
import { Pizza } from './types/Pizza';
import style from './App.module.scss';
import { MainContext } from './context/mainContext';
import { useAppSelector } from './redux/hooks';

import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import Search from './components/Search';

const DATA_LINK = 'https://66eb10d955ad32cda47b9003.mockapi.io/items';
const LIMIT_COUNT = 4;

const App = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { search, page, category, sort, reverse } = useAppSelector(
    (state) => state.filter
  );

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    const SEARCH_URL = `${DATA_LINK}?sortBy=${sortValues[sort].flag}&category=${
      category ? category : ''
    }&name=${search}&order=${
      reverse ? 'desc' : ''
    }&limit=${LIMIT_COUNT}&page=${page}`;

    setTimeout(() => {
      fetch(SEARCH_URL)
        .then((res) => res.json())
        .then((data) => {
          setPizzas(data);
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, [sort, search, category, reverse, page]);

  return (
    <div className={style.app}>
      <Header />
      {!isError && <Search />}
      {isError && <ErrorPage />}
      {!isError && (
        <Routes>
          <Route
            path="/"
            element={
              <MainContext.Provider
                value={{
                  pizzas,
                  isLoading,
                }}
              >
                <Main />
              </MainContext.Provider>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
