import { CardGradientContainerProps } from '@/interfaces';

// To Put Border Color => border-borderColor${variant}
const CardGradientContainer = ({
  children,
  className = '',
}: CardGradientContainerProps) => {
  return (
    <div className={`flex-auto rounded-2 border ${className}`}>
      <div className='rounded-2 bg-dark p-4'>{children}</div>
    </div>
  );
};

export default CardGradientContainer;
