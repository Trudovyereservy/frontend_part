'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Form.module.scss';
import Image from 'next/image';
import lines from '../../../public/Lines.svg';

interface FormData {
  name: string;
  phoneNumber: number;
  eMail: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className={styles.form}>
      <h2 className={styles.form__headerMobile}>Пример текста</h2>
      <div className={styles.form__photoContainer} />
      <Image className={styles.form__lines} src={lines} alt="Декоративные линии" />
      <div className={styles.form__formContainer}>
        <h2 className={styles.form__header}>Пример текста</h2>
        <p className={styles.form__subtitle}>Пример текста пример текста пример текста пример текста пример текста пример текста</p>
        <form className={styles.form__form} onSubmit={handleSubmit(onSubmit)}>
          <input className={styles.form__input} placeholder="Ваше имя" {...register('name')}></input>
          <input className={styles.form__input} placeholder="Телефон" {...register('phoneNumber')}></input>
          <input className={styles.form__input} placeholder="E-mail" {...register('eMail')}></input>
          <button className={styles.form__submitButton} type="submit">Пример текста</button>
        </form>
      </div>
    </div>
  );
}
