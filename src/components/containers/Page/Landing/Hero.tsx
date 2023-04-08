import { LinkButton, Section, Text } from '@/components';

const LandingPageHero = () => {
  return (
    <Section>
      <div className='flex justify-center pb-44 pt-32'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center '>
            <div className='flex flex-row'>
              <Text level='h1' className='heading-1'>
                Tech Learning for
              </Text>
              <Text level='h1' className='heading-1 text-center text-primary'>
                &nbsp;Everyone
              </Text>
            </div>
            <Text level='h4' className='heading-4  mt-2 text-grey'>
              Learn Tech Skills & Prepare yourself for the Web3 Era.
            </Text>
          </div>
          <div className='mt-3'>
            <LinkButton
              href='#'
              buttonProps={{
                variant: 'PRIMARY',
                text: 'Explore Roadmaps',
                className: 'h-24 w-72 text-lg',
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LandingPageHero;
