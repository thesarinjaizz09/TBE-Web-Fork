import { FlexContainer, Image, LinkButton, Section, Text } from '@/components';

const CanYouBeAProgrammer = () => {
  return (
    <Section>
      <FlexContainer direction='row' justifyCenter={false}>
        <FlexContainer
          direction='row'
          className='w-full gap-4 rounded-2 bg-dark shadow-lg'
        >
          <div className='w-1/3'>
            <Image src='/svg/laptop.svg' alt='laptop' />
          </div>
          <div className='flex flex-col'>
            <Text level='h3' className='heading-3'>
              Can you be a programmer?
            </Text>
            <Text level='p' className='paragraph pt-1'>
              Book your session and discuss if programming is for you.
            </Text>
            <LinkButton
              href='#'
              className='pt-3'
              buttonProps={{
                variant: 'PRIMARY',
                text: 'Book A Free Counselling Now',
                className: 'pt-3',
              }}
            />
          </div>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default CanYouBeAProgrammer;
