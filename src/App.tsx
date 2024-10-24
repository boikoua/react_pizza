import { useState } from 'react';
import style from './App.module.scss';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';
import { pizzasFromServer } from './api/pizzas';

const App = () => {
  const [sortValue, setSortValue] = useState(0);
  const [reverse, setReverse] = useState(false);

  let sortedPizzas = [...pizzasFromServer].sort((p1, p2) => {
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
      <Main
        pizzas={sortedPizzas}
        sort={sortValue}
        setSort={setSortValue}
        reverse={reverse}
        setReverse={setReverse}
      />
      {/* <CartPage /> */}
      {/* <NotFoundPage /> */}
    </div>
  );
};

export default App;
