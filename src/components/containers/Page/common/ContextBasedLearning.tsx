import { FlexContainer, Image, Section, Text } from '@/components';

const ContextBasedLearning = () => {
  return (
    <Section>
      <FlexContainer
        itemCenter={true}
        justifyCenter={true}
        className='m-auto w-1/2'
      >
        <FlexContainer
          itemCenter={true}
          justifyCenter={true}
          direction='col'
          className='gradient-4 w-full rounded-2 p-8'
        >
          <Image
            src='/svg/context_based_learning.svg'
            alt='developer activities'
            className='w-64'
          />
          <FlexContainer direction='col' className='w-full pt-8'>
            <Text level='p' className='paragraph text-contentLight'>
              WE FOCUS ON
            </Text>
            <Text level='h3' className='heading-3 pt-1 text-contentLight'>
              Context Based Learning
            </Text>
            <Text
              level='p'
              className='strong-text pt-2 text-contentLight'
              textCenter={true}
            >
              Our Curriculum designed to teach minimal learning so you care
              about learning more and remembering less.
            </Text>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default ContextBasedLearning;
