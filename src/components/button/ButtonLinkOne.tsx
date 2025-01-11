'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

type ButtonLinkProps = {
  key?: number;
  btnText?: string;
  url: string;
  target?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  classes?: string;
};

const ButtonLinkOne: React.FC<ButtonLinkProps> = ({
  key = null,
  btnText = '',
  url = '/',
  target = '',
  icon1 = null,
  icon2 = null,
  classes = '',
}) => {

  return (
    <Link
      key={key}
      href={url}
      target={target}
      className={`flex items-center justify-center shadow-custom-xl bg-primary hover:bg-primary_hover text-white rounded-full px-4 py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none text-sm font-semibold ${classes}`}
    >
      {icon1 && <span>{icon1}</span>}
      {btnText}
      {icon2 && <span>{icon2}</span>}
    </Link>
  );
};

export default ButtonLinkOne;
