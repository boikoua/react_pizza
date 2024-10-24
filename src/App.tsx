import style from './App.module.scss';
import CartPage from './components/CartPage';
import Header from './components/Header';
import Main from './components/Main';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Main />
      {/* <CartPage /> */}
      {/* <NotFoundPage /> */}
    </div>
  );
};

export default App;
