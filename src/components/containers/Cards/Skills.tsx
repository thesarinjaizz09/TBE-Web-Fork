import {
  CardSectionContainer,
  FlexContainer,
  Section,
  SectionHeaderContainer,
  SkillCard,
} from '@/components';
import { SKILLS_MICROCAMP } from '@/constant';

const Skills = () => {
  return (
    <Section>
      <FlexContainer direction='col' className='w-full'>
        <SectionHeaderContainer heading='Skills we teach' focusText='build' />
        <CardSectionContainer>
          {SKILLS_MICROCAMP.map((skill) => {
            const { id, title, details: skilledDetails } = skill;
            return (
              <SkillCard
                key={id}
                skilledDetails={skilledDetails}
                title={title}
              />
            );
          })}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default Skills;
