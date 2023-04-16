import { FlexContainer, Text } from '@/components/';
import { MicroCampFeatureCardProps } from '@/interfaces';

const PricingFeatureCard = ({ title, content }: MicroCampFeatureCardProps) => {
  return (
    <FlexContainer
      direction='col'
      itemCenter={true}
      justifyCenter={true}
      className='mb-4 rounded-2 bg-white px-4 py-4 text-blue-100 duration-300'
    >
      <Text level='h3' className='heading-3 text-black'>
        {title}
      </Text>
      <Text level='p' className='paragraph text-black'>
        {content}
      </Text>
    </FlexContainer>
  );
};

export default PricingFeatureCard;
