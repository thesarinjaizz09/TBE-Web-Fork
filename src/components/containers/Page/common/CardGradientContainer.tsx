import { CardGradientContainerProps } from '@/interfaces';

const CardGradientContainer = ({
  children,
  className = '',
  variant = 1,
  borderWidth = 2,
  roundedWidth = 2,
}: CardGradientContainerProps) => {
  return (
    <div
      className={`flex-1 rounded-${roundedWidth} border-${borderWidth} border-borderColor${variant} ${className}`}
    >
      <div className={`bg-dark p-4 rounded-${roundedWidth}`}>{children}</div>
    </div>
  );
};

export default CardGradientContainer;
