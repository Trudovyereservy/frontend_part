import { ButtonProps } from './Button.props';
import Link from 'next/link';
import styles from './button.module.scss';

const Button = (props: ButtonProps) => {
  const { onClick, className, disabled, children, active } = props;
  
  return (
    <button className={className} disabled={disabled}>
        {children}
    </button>
  );
};

export { Button };