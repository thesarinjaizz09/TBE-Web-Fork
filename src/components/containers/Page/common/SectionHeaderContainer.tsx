import { Text } from '@/components';
import { SectionHeaderProps } from '@/interfaces';

const SectionHeaderContainer = ({ heading, focusText }: SectionHeaderProps) => {
  return (
    <div className='flex w-full justify-center'>
      <Text level='h4' className='heading-4'>
        {heading}
      </Text>
      <Text level='h4' className='heading-4 text-primary'>
        &nbsp;{focusText}
      </Text>
    </div>
  );
};

export default SectionHeaderContainer;
