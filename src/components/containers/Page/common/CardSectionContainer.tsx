import { FlexContainer } from '@/components';
import { CardSectionContainerProps } from '@/interfaces';

const CardSectionContainer = ({ children }: CardSectionContainerProps) => {
  return (
    <FlexContainer itemCenter={false} className='w-full gap-4 pt-4'>
      {children}
    </FlexContainer>
  );
};

export default CardSectionContainer;
