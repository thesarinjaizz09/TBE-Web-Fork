import {
  CardSectionContainer,
  FlexContainer,
  Section,
  SectionHeaderContainer,
  SkillCard,
} from '@/components';
import { SKILLS } from '@/constant';

const Skills = () => {
  return (
    <Section>
      <FlexContainer direction='col' className='w-full'>
        <SectionHeaderContainer heading='Skills you will' focusText='build' />
        <CardSectionContainer>
          {SKILLS.map((skill) => {
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
