import { FlexContainer, Image, Text } from '@/components';
import { SKILLProps } from '@/interfaces';

const SkillCardItem = ({ name, image, imageAltText }: SKILLProps) => {
  return (
    <FlexContainer direction='col' itemCenter={true} className='max-h-sm'>
      <Image className='w-14' src={`${image}`} alt={imageAltText} />

      <Text level='p' className='paragraph mt-4 text-white'>
        {name}
      </Text>
    </FlexContainer>
  );
};

export default SkillCardItem;
