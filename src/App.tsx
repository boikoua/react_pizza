import { useState } from 'react';
import style from './App.module.scss';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={style.app}>
      <Header />
      <Main count={count} onClick={handleAddCount} />
      {/* <CartPage /> */}
      {/* <NotFoundPage /> */}
    </div>
  );
};

export default App;
