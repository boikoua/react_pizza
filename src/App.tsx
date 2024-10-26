import { useEffect, useState } from 'react';
import style from './App.module.scss';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';
import { Pizza } from './types/Pizza';
import ErrorPage from './components/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import { sortValues } from './api/sort';
import Search from './components/Search';
import { SearchContext } from './context/searchContext';
import { MainContext } from './context/mainContext';

const DATA_LINK = 'https://66eb10d955ad32cda47b9003.mockapi.io/items';
const LIMIT_COUNT = 4;

const App = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortValue, setSortValue] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [categoryValue, setCategoryValue] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    setTimeout(() => {
      fetch(
        `${DATA_LINK}?sortBy=${sortValues[sortValue].flag}&category=${
          categoryValue ? categoryValue : ''
        }&name=${searchValue}&order=${
          reverse ? 'desc' : ''
        }&limit=${LIMIT_COUNT}&page=${page}`
      )
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
  }, [sortValue, searchValue, categoryValue, reverse, page]);

  return (
    <div className={style.app}>
      <Header />
      {!isError && (
        <SearchContext.Provider
          value={{ searchValue, setSearchValue, setPage }}
        >
          <Search />
        </SearchContext.Provider>
      )}
      {isError && <ErrorPage />}
      {!isError && (
        <Routes>
          <Route
            path="/"
            element={
              <MainContext.Provider
                value={{
                  pizzas,
                  sortValue,
                  setSortValue,
                  reverse,
                  setReverse,
                  isLoading,
                  categoryValue,
                  setCategoryValue,
                  page,
                  setPage,
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
