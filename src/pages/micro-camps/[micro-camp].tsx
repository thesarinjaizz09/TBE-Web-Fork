import { LinkButton, Section, Text } from '@/components';

const MicroCampLanding = () => {
  return (
    <Section className='px-8 py-4'>
      <div className='gradient-6 rounded-2'>
        <div className='flex flex-col p-8'>
          <div className='flex justify-center'>
            <Text level='p' className='strong-text text-dark'>
              The Boring{' '}
              <Text level='span' className='strong-text text-primary'>
                &nbsp;Micro-camp
              </Text>
            </Text>
          </div>
          <div className='flex flex-col items-center pt-5'>
            <div className='flex w-full flex-col justify-center'>
              <div className='flex w-full justify-center'>
                <Text level='h2' className='heading-2 text-dark'>
                  Be{' '}
                  <Text level='span' className='heading-2 text-primary'>
                    Front-end{' '}
                  </Text>
                  <Text level='span' className='heading-2 text-dark'>
                    Master
                  </Text>
                </Text>
              </div>
              <div className='flex w-full justify-center pt-1'>
                <Text level='p' className='strong-text text-dark'>
                  Learn Core of Front-end Engineering with Placement Assistance
                  in 8 Weeks.
                </Text>
              </div>
            </div>
            <div className='flex w-1/3 justify-center justify-evenly pt-4'>
              <LinkButton
                href='#'
                buttonProps={{ variant: 'PRIMARY', text: 'Register now' }}
              />
              <LinkButton
                href='#'
                buttonProps={{ variant: 'OUTLINE', text: 'Explore program' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MicroCampLanding;
