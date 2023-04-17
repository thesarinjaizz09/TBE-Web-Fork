import { FlexContainer, Text } from '@/components/';
import { MicroCampFeatureCardProps } from '@/interfaces';

const PricingFeatureCard = ({ content }: MicroCampFeatureCardProps) => {
  return (
    <FlexContainer
      direction='col'
      itemCenter={true}
      justifyCenter={true}
      className='rounded-2 bg-white px-4 py-2'
    >
      <Text level='p' className='strong-text text-center text-contentLight'>
        {content}
      </Text>
    </FlexContainer>
  );
};

export default PricingFeatureCard;
