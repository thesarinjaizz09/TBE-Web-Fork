import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

const getButtonVariant = (variant: string) => {
  let buttonVariant = '';
  switch (variant) {
    case 'primary':
      buttonVariant =
        'mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded';
      break;
    case 'secondary':
      buttonVariant = '2';
      break;
    case 'disable':
      buttonVariant = '3';
      break;
    default:
      buttonVariant = '4';
  }
  return buttonVariant;
};
export const Button = ({ onClick, children, variant }: ButtonProps) => {
  return (
    <button className={getButtonVariant(variant || '')}>{children}</button>
  );
};
