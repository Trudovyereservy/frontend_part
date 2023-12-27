"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './page.module.scss';
import Image from 'next/image';
import lines from '../../images/Lines.svg';

type FormData = {
  name: string;
  phoneNumber: number;
  eMail: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className={styles.form}>
      <h2 className={styles.form__header}>Пример текста</h2>
      <div className={styles.form__photoContainer} />
      <Image className={styles.form__lines} src={lines} alt="Декоративные линии" />
      <div className={styles.form__formContainer}>
        <h2>Пример текста</h2>
        <p>Пример текста пример текста пример текста пример текста пример текста пример текста</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Ваше имя" {...register('name')}></input>
          <input placeholder="Телефон" {...register('phoneNumber')}></input>
          <input placeholder="E-mail" {...register('eMail')}></input>
          <button type="submit">Пример текста</button>
        </form>
      </div>
    </div>
  );
}
