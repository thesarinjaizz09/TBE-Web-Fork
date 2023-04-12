import { Image, Text } from '@/components';
import { SKILLProps } from '@/interfaces';

const SkillCardItem = ({ name, image, imageAltText }: SKILLProps) => {
  return (
    <div className='flex flex-col items-center'>
      <Image className='w-14' src={`${image}`} alt={imageAltText} />

      <Text level='p' className='paragraph mt-4 text-white'>
        {name}
      </Text>
    </div>
  );
};

export default SkillCardItem;
