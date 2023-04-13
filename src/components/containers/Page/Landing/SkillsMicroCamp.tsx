import {
  CardSectionContainer,
  Section,
  SectionHeaderContainer,
  SkillCard,
} from '@/components';
import { SKILLS_MICROCAMP } from '@/constant';

const SkillsMicroCamp = () => {
  return (
    <Section>
      <div className='flex flex-col justify-center'>
        <SectionHeaderContainer heading='Skills you will' focusText='build' />
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
      </div>
    </Section>
  );
};

export default SkillsMicroCamp;
