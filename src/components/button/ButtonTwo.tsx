'use client';

import { useFormStatus } from 'react-dom';
import React, { ReactNode } from 'react';

type ButtonProps = {
  key?: number;
  processText?: string;
  btnText?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonTwo: React.FC<ButtonProps> = ({
  key = null,
  processText = 'Processing...',
  btnText = '',
  icon1 = null,
  icon2 = null,
  classes = '',
  type = 'button',
  disabled = false,
  onClick = () => {}
}) => {
  const { pending } = useFormStatus() || {};

  return (
    <button
      key={key}
      type={type}
      className={`flex items-center justify-center border border-primary hover:border-transparent bg-transparent hover:bg-primary text-primary hover:text-white rounded-full px-4 py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-semibold ${classes} ${pending || disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={pending || disabled}
      onClick={onClick}
    >
      {icon1 && <span>{icon1}</span>}
      {pending ? processText : btnText}
      {icon2 && <span>{icon2}</span>}
    </button>
  );
};

export default ButtonTwo;
