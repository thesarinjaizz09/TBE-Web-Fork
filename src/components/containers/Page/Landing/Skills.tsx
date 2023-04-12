import {
  CardSectionContainer,
  Section,
  SectionHeaderContainer,
  SkillCard,
} from '@/components';
import { SKILLS } from '@/constant';

const Skills = () => {
  return (
    <Section>
      <div className='flex flex-col justify-center'>
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
      </div>
    </Section>
  );
};

export default Skills;
