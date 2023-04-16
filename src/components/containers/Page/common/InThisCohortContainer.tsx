import {
  FlexContainer,
  GridContainer,
  MicroCampFeatureCard,
  Section,
  SectionHeaderContainer,
  Text,
} from '@/components';
import { FRONTEND_MICROCAMP_CURRICULUM } from '@/constant';

const InThisCohortContainer = () => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer direction='col'>
          <Text level='p' className='strong-text text-grey'>
            IN THIS COHORT
          </Text>
          <SectionHeaderContainer
            heading='Learn Fundamentals of'
            focusText='Front-end Engineering'
            headingLevel={4}
            className='pt-2'
          />
        </FlexContainer>

        <GridContainer className='grid-cols-3 gap-1 pt-5'>
          {FRONTEND_MICROCAMP_CURRICULUM.map((item) => {
            const { id } = item;
            return <MicroCampFeatureCard key={id} {...item} />;
          })}
        </GridContainer>
      </FlexContainer>
    </Section>
  );
};

export default InThisCohortContainer;
