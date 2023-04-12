import { LinkButton, Section, Text } from '@/components';
import { FRONTEND_MICROCAMP_CURRICULUM } from '@/constant';
const MicroCampLanding = () => {
  return (
    <>
      <Section className='px-8 py-4'>
        <div className='gradient-6 rounded-2'>
          <div className='flex flex-col p-8'>
            <div className='flex items-center justify-center'>
              <Text level='h4' className='heading-4  text-dark'>
                The Boring
              </Text>
              <Text level='h4' className=' heading-4 text-primary'>
                &nbsp;Micro-camp
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
                    Learn Core of Front-end Engineering with Placement
                    Assistance in 8 Weeks.
                  </Text>
                </div>
              </div>
              <div className='flex w-1/3 justify-center  pt-4'>
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
      <Section className='px-8 py-4'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <Text level='p' className='paragraph text-center text-gray-500'>
              IN THIS COHORT
            </Text>
            <div className='flex items-center justify-center'>
              <Text level='h3' className='heading-3 pr-2'>
                Learn Fundamentals of
              </Text>
              <Text level='h3' className='heading-3 text-primary'>
                Front-end Engineering
              </Text>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3 pt-4'>
            {FRONTEND_MICROCAMP_CURRICULUM.map((item) => (
              <button
                className='rounded-lg  bg-blue-500 px-4 py-2 text-blue-100 duration-300 hover:bg-blue-600'
                key={item.id}
              >
                <Text level='h3' className='heading-3'>
                  {item.title}
                </Text>
                <Text level='p' className='paragraph'>
                  {item.content}
                </Text>
              </button>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default MicroCampLanding;
