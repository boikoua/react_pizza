import { useAppSelector } from '../../redux/hooks';
import CartEmpty from '../CartEmpty';
import CartFull from '../CartFull';

const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return <>{cart.length !== 0 ? <CartFull /> : <CartEmpty />}</>;
};

export default CartPage;
