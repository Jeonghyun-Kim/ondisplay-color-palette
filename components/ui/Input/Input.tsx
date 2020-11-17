import React from 'react';
import cn from 'classnames';

import { Root } from './Input.styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<Props> = ({
  className,
  label,
  required,
  error = false,
  onChange,
  ...props
}) => {
  return (
    <Root className={cn({ error, required })}>
      <label>
        {label}
        {required && ' (*)'}
      </label>
      <input
        className={cn(className, 'transition duration-150 ease-in-out')}
        {...props}
      />
    </Root>
  );
};

export default Input;
