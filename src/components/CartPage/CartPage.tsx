import CartEmpty from '../CartEmpty';
import CartFull from '../CartFull';

const CartPage = () => {
  return <>{false ? <CartFull /> : <CartEmpty />}</>;
};

export default CartPage;
