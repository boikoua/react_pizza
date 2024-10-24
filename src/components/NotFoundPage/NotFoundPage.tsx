import style from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={style.error}>
      <h1>🍕 ERROR 404</h1>
      <h2>Такої сторінки не існує...🙄</h2>
    </section>
  );
};

export default NotFoundPage;
