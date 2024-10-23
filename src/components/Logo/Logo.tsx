import style from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={style.logo}>
      <a href="/">
        <img className={style.img} src="./img/logo.png" alt="Logo" />
      </a>
      <div>
        <h3 className={style.title}>REACT PIZZA</h3>
        <p className={style.slogan}>найсмачніша піца у світі</p>
      </div>
    </div>
  );
};

export default Logo;
