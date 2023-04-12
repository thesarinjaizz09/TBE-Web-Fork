import { CardGradientContainerProps } from '@/interfaces';

const CardGradientContainer = ({
  children,
  className,
}: CardGradientContainerProps) => {
  return (
    <div className={`gradient-2 max-w-sm rounded-2 ${className}`}>
      <div className='m-[1px] rounded-2 bg-dark p-4'>{children}</div>
    </div>
  );
};

export default CardGradientContainer;
