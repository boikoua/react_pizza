import React from 'react';
import BasketButton from '../BasketButton';
import Logo from '../Logo';
import style from './Header.module.scss';

const Header = React.memo(() => {
  return (
    <header className={style.header}>
      <Logo />
      <BasketButton />
    </header>
  );
});

export default Header;
