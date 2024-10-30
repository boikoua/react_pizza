import { Link } from 'react-router-dom';
import style from './Logo.module.scss';
import React from 'react';

const Logo = React.memo(() => {
  return (
    <Link to="/" className={style.logo}>
      <img
        className={style.img}
        src={`${process.env.PUBLIC_URL}/img/logo.svg`}
        alt="Logo"
      />
      <div>
        <h3 className={style.title}>REACT PIZZA</h3>
        <p className={style.slogan}>найсмачніша піца у світі</p>
      </div>
    </Link>
  );
});

export default Logo;
