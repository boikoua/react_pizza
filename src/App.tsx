import { useEffect, useState } from 'react';
import style from './App.module.scss';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';
import { Pizza } from './types/Pizza';
import { Loader } from './components/Loader';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortValue, setSortValue] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    setTimeout(() => {
      fetch('https://66eb10d955ad32cda47b9003.mockapi.io/items')
        .then((res) => res.json())
        .then((data) => setPizzas(data))
        .catch(() => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  let sortedPizzas = [...pizzas].sort((p1, p2) => {
    switch (sortValue) {
      case 1:
        return p1.price - p2.price;
      case 2:
        return p1.name.localeCompare(p2.name);
      default:
        return p2.rating - p1.rating;
    }
  });

  sortedPizzas = reverse ? sortedPizzas.reverse() : sortedPizzas;

  return (
    <div className={style.app}>
      <Header />
      {isLoading && !isError && <Loader />}
      {isError && <ErrorPage />}
      {!isLoading && !isError && (
        <Main
          pizzas={sortedPizzas}
          sort={sortValue}
          setSort={setSortValue}
          reverse={reverse}
          setReverse={setReverse}
        />
      )}

      {/* <CartPage /> */}
      {/* <NotFoundPage /> */}
    </div>
  );
};

export default App;
