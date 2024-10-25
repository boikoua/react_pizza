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

const DATA_LINK = 'https://66eb10d955ad32cda47b9003.mockapi.io/items';

const App = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortValue, setSortValue] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [categoryValue, setCategoryValue] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    setTimeout(() => {
      fetch(
        `${DATA_LINK}?sortBy=${sortValues[sortValue].flag}&category=${
          categoryValue ? categoryValue : ''
        }&name=${searchValue}&order=${reverse ? 'desc' : ''}`
      )
        .then((res) => res.json())
        .then((data) => setPizzas(data))
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, [sortValue, searchValue, categoryValue, reverse]);

  return (
    <div className={style.app}>
      <Header />
      {!isError && <Search value={searchValue} setValue={setSearchValue} />}
      {isError && <ErrorPage />}
      {!isError && (
        <Routes>
          <Route
            path="/"
            element={
              <Main
                pizzas={pizzas}
                sort={sortValue}
                setSort={setSortValue}
                reverse={reverse}
                setReverse={setReverse}
                isLoading={isLoading}
                category={categoryValue}
                setCategory={setCategoryValue}
              />
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
