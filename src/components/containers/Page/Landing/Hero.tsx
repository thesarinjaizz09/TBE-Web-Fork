import { LinkButton, Section, Text } from '@/components';

const LandingPageHero = () => {
  return (
    <Section>
      <div className='flex justify-center py-8'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center '>
            <div className='flex flex-row'>
              <Text level='h2' className='heading-2'>
                Tech Learning for
              </Text>
              <Text level='h2' className='heading-2 text-center text-primary'>
                &nbsp;Everyone
              </Text>
            </div>
            <Text level='p' className='paragraph  mt-2 text-grey'>
              Learn Tech Skills & Prepare yourself for a Tech Job.
            </Text>
          </div>
          <div className='mt-4'>
            <LinkButton
              href='#'
              buttonProps={{
                variant: 'PRIMARY',
                text: 'Explore Roadmaps',
                className: '',
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LandingPageHero;
