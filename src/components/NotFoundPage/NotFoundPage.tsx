import style from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={style.error}>
      <h2>Нажаль такої сторінки не існує...🙄</h2>
    </section>
  );
};

export default NotFoundPage;
