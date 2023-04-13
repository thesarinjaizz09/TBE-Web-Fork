import {
  CardSectionContainer,
  Section,
  SectionHeaderContainer,
  WeGuideDifferentlyCard,
} from '@/components';
import { USP } from '@/constant';

const WeGuideDifferently = () => {
  return (
    <Section>
      <div className='flex flex-col'>
        <SectionHeaderContainer heading='We do' focusText='differently' />
        <CardSectionContainer>
          {USP.map((item) => {
            const { image, imageAltText, title, content, id } = item;
            return (
              <WeGuideDifferentlyCard
                key={item.id}
                image={image}
                imageAltText={imageAltText}
                title={title}
                content={content}
              />
            );
          })}
        </CardSectionContainer>
      </div>
    </Section>
  );
};

export default WeGuideDifferently;
