'use client';

import { useFormStatus } from 'react-dom';

type ButtonProps = {
  key?: number;
  placeholderText?: string;
  id?: string;
  classes?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'file' | 'checkbox';
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
};

const InputOne: React.FC<ButtonProps> = ({
  key = null,
  placeholderText = '',
  id = '',
  classes = '',
  type = 'text',
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  defaultChecked = false,
}) => {
  const { pending } = useFormStatus() || {};

  return (
    <input
      key={key}
      id={id}
      type={type}
      required={required}
      placeholder={placeholderText}
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      className={`text-secondary rounded-xl p-[0.625rem] border outline-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 outline-none text-sm ${classes} ${pending || disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    />
  );
};

export default InputOne;
