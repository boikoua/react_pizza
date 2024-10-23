import style from './Sort.module.scss';

const Sort = () => {
  return (
    <div className={style.sort}>
      <img className={style.icon} src="./img/sort-icon.png" alt="Sort Direct" />
      <p className={style.text}>
        Сортування по: <span className={style.category}>популярності</span>
      </p>
      <ul className={style.popup}>
        <li className={style.option}>популярності</li>
        <li className={style.option}>ціні</li>
        <li className={style.option}>алфавіту</li>
      </ul>
    </div>
  );
};

export default Sort;
