import { FlexContainer, Text } from '@/components';
import { SectionHeaderProps } from '@/interfaces';

const SectionHeaderContainer = ({
  heading,
  focusText,
  headingLevel = 4,
}: SectionHeaderProps) => {
  return (
    <FlexContainer justifyCenter={true} className='w-full'>
      <Text level={`h${headingLevel}`} className={`heading-${headingLevel}`}>
        {heading}
        <Text level='span' className={`heading-${headingLevel} text-primary`}>
          &nbsp;{focusText}
        </Text>
      </Text>
    </FlexContainer>
  );
};

export default SectionHeaderContainer;
