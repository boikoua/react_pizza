import { ChangeEvent, FormEvent, useState } from 'react';
import cn from 'classnames';
import style from './Form.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [isErrorName, setIsErrorName] = useState(false);

  const [number, setNumber] = useState('');
  const [isErrorNumber, setIsErrorNumber] = useState(false);

  const [email, setEmail] = useState('');

  const [select, setSelect] = useState('');
  const [isErrorSelect, setIsErrorSelect] = useState(false);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setIsErrorName(false);
    setName(event.target.value.trim());
  };

  const handleChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setIsErrorNumber(false);
    setNumber(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsErrorSelect(false);
    setSelect(event.target.value);
  };

  const handleSumbitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClearForm = () => {
    setName('');
    setIsErrorName(false);
    setNumber('');
    setIsErrorNumber(false);
    setEmail('');
    setSelect('');
    setIsErrorSelect(false);
  };

  return (
    <form className={style.form} onSubmit={handleSumbitForm}>
      <label className={style.label} htmlFor="name">
        Ваше ім'я *
      </label>
      <input
        className={cn(`${style.input}`, { [style.error]: isErrorName })}
        type="text"
        id="name"
        placeholder="Введіть ваше ім'я"
        required
        value={name}
        onChange={handleChangeName}
        onBlur={() => {
          if (!name) {
            setIsErrorName(true);
          }
        }}
      />
      {isErrorName && <span className={style.message}>Ім'я обов'язково</span>}
      <label className={style.label} htmlFor="number">
        Ваше номер телефону *
      </label>
      <input
        className={cn(`${style.input}`, { [style.error]: isErrorNumber })}
        type="number"
        id="number"
        placeholder="+380630000000"
        required
        value={number}
        onChange={handleChangeNumber}
        onBlur={() => {
          if (!number) {
            setIsErrorNumber(true);
          }
        }}
      />
      {isErrorNumber && (
        <span className={style.message}>Телефон обов'язково</span>
      )}
      <label className={style.label} htmlFor="number">
        Ваше e-mail
      </label>
      <input
        className={style.input}
        type="email"
        id="number"
        placeholder="example@mail.com"
        value={email}
        onChange={handleChangeEmail}
      />
      <label className={style.label} htmlFor="delivery">
        Спосіб доставки *
      </label>
      <select
        className={cn(`${style.input}`, { [style.error]: isErrorSelect })}
        name="delivery"
        id="delivery"
        required
        value={select}
        onChange={handleChangeSelect}
        onBlur={() => {
          if (!select) {
            setIsErrorSelect(true);
          }
        }}
      >
        <option className={style.disabled} value="" selected>
          Виберіть зручний варіант
        </option>
        <option value="shop">Самовивіз</option>
        <option value="house">На адресу</option>
      </select>
      {isErrorSelect && (
        <span className={style.message}>Спосіб доставки обов'язково</span>
      )}
      <div className={style.buttons}>
        <button className={style.submit} type="submit">
          Відправити
        </button>
        <button className={style.reset} type="reset" onClick={handleClearForm}>
          Очистити
        </button>
      </div>
    </form>
  );
};

export default Form;
