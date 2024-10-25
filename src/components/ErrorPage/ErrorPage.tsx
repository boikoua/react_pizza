import style from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <section className={style.error}>
      <h1>🍕 ERROR 404</h1>
      <h2>Щось пішло не так. Перевірте своє інтернет з'єднання 🗿</h2>
    </section>
  );
};

export default ErrorPage;
