import { CardSectionContainerProps } from '@/interfaces';

const CardSectionContainer = ({ children }: CardSectionContainerProps) => {
  return (
    <div className='flex items-center justify-center gap-4 pt-6'>
      {children}
    </div>
  );
};

export default CardSectionContainer;
