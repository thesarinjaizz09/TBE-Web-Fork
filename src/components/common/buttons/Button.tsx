import { ButtonProps } from '@/interfaces';

const Button = ({ variant, className = '', text, onClick }: ButtonProps) => {
  let additionalClasses = ' button bg-light px-4 py-2 text-white';
  if (variant === 'PRIMARY')
    additionalClasses =
      ' button bg-primary px-4 py-2 text-white hover:bg-transparent hover:text-primary border-2 border-primary hover:scale-105 transition-all';
  else if (variant === 'OUTLINE')
    additionalClasses =
      ' button bg-light-bg border-2 border-primary px-4 py-2 text-primary hover:scale-105 transition-all';

  return (
    <button className={className + additionalClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
