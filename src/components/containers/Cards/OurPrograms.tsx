import {
  CardSectionContainer,
  FlexContainer,
  ProgramCard,
  Section,
  SectionHeaderContainer,
} from '@/components';
import { PROGRAMS } from '@/constant';

const OurPrograms = () => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <SectionHeaderContainer heading='Our' focusText='Programs' />
        <CardSectionContainer>
          {PROGRAMS.map((program) => {
            const { image, imageAltText, title, content, buttonText } = program;
            return (
              <ProgramCard
                key={program.id}
                image={image}
                imageAltText={imageAltText}
                title={title}
                content={content}
                buttonText={buttonText}
              />
            );
          })}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default OurPrograms;
