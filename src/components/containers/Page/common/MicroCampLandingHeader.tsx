import {
  FlexContainer,
  LinkButton,
  MicroCampBGGradientContainer,
  Section,
  SectionHeaderContainer,
  Text,
} from '@/components';

const MicroCampLandingHeader = () => {
  return (
    <Section className='px-8 py-4'>
      <MicroCampBGGradientContainer>
        <FlexContainer className='px-12 py-8' direction='col'>
          <FlexContainer itemCenter={true} justifyCenter={true}>
            <SectionHeaderContainer
              heading='The Boring'
              focusText='Micro-camp'
              headingLevel={5}
              className='text-dark'
            />
          </FlexContainer>
          <FlexContainer direction='col' itemCenter={true} className='pt-5'>
            <FlexContainer
              direction='col'
              justifyCenter={true}
              className='w-full'
            >
              <Text level='h2' className='heading-2 text-dark'>
                Be{' '}
                <Text level='span' className='heading-2 text-primary'>
                  Front-end{' '}
                </Text>
                <Text level='span' className='heading-2 text-dark'>
                  Master
                </Text>
              </Text>
              <Text level='p' className='strong-text pt-1 text-dark'>
                Learn Core of Front-end Engineering with Placement Assistance in
                8 Weeks.
              </Text>
            </FlexContainer>
            <FlexContainer justifyCenter={true} className='w-full gap-2 pt-4'>
              <LinkButton
                href='#'
                buttonProps={{ variant: 'PRIMARY', text: 'Register now' }}
              />
              <LinkButton
                href='#'
                buttonProps={{ variant: 'OUTLINE', text: 'Explore program' }}
              />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </MicroCampBGGradientContainer>
    </Section>
  );
};

export default MicroCampLandingHeader;
