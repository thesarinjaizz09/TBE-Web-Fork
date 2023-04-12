import {
  CardSectionContainer,
  ProgramCard,
  Section,
  SectionHeaderContainer,
} from '@/components';
import { PROGRAMS } from '@/constant';

const OurPrograms = () => {
  return (
    <Section>
      <div className='flex flex-col'>
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
      </div>
    </Section>
  );
};

export default OurPrograms;
