import { ProgramCard, Section, Text } from '@/components';
import { PROGRAMS } from '@/constant';

const OurPrograms = () => {
  return (
    <Section>
      <div className=' flex flex-col'>
        <div className='flex justify-center'>
          <Text level='h3' className='heading-3'>
            Our
          </Text>
          <Text level='h3' className='heading-3 text-primary'>
            &nbsp;Programs
          </Text>
        </div>
        <div className='flex items-center justify-center gap-4 pt-5'>
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
        </div>
      </div>
    </Section>
  );
};

export default OurPrograms;
