import { FlexContainer, Text } from '@/components/';
import { MicroCampFeatureCardProps } from '@/interfaces';

const MicroCampFeatureCard = ({
  title,
  content,
}: MicroCampFeatureCardProps) => {
  return (
    <FlexContainer
      direction='col'
      itemCenter={true}
      justifyCenter={true}
      className='gradient-5 rounded-2 px-4 py-4 text-blue-100 duration-300 hover:bg-blue-500'
    >
      <Text level='h3' className='heading-3'>
        {title}
      </Text>
      <Text level='p' className='paragraph'>
        {content}
      </Text>
    </FlexContainer>
  );
};

export default MicroCampFeatureCard;
