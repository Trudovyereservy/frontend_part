import { InputProps } from './Input.props';

const Input = (props: InputProps) => {
  const { className, register, nameInput } = props;

  return (
    <input
      type="text"
      placeholder="Phone"
      className={className}
      {...register(nameInput, { required: 'Введите телефон в формате +7-***-**-**' })}
    />
  );
};

export { Input };
