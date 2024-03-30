import { InputProps } from './Input.props';

const Input = ({ className, register, nameInput, pattern, ...inputProps }: InputProps) => {
  const { rest, ...restProps } = inputProps;

  return (
    <input
      type="text"
      placeholder="Phone"
      className={className}
      {...register(nameInput, {
        required: 'Введите телефон в формате +7-***-**-**',
        pattern: {
          value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
          message: 'Неверный формат телефона',
        },
      })}
      {...restProps}
    />
  );
};

export { Input };
