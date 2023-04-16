import {
  FlexContainer,
  GridContainer,
  PricingFeatureCard,
  Section,
  SectionHeaderContainer,
  Text,
} from '@/components';
import { FRONTEND_MICROCAMP_CURRICULUM } from '@/constant';

const TechEducationForEveryone = () => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer direction='col' className='pb-2'>
          <Text level='p' className='strong-text '>
            TECH EDUCATION FOR EVERYONE
          </Text>
          <Text level='h3' className='heading-3'>
            Simple <span className='text-primary'>Pricing</span>-Transparent{' '}
            <span className='text-primary'>Pricing</span>.
          </Text>
          <Text level='p' className='text-subtitle text-gray-500'>
            We don’t believe in variable pricing for our products. We don’t sell
            you anything blindly.
          </Text>
        </FlexContainer>

        <GridContainer className='gradient-2  grid-cols-1 gap-2 rounded-lg p-10'>
          {FRONTEND_MICROCAMP_CURRICULUM.map((item) => {
            const { id } = item;
            return <PricingFeatureCard key={id} {...item} />;
          })}
          <div className='flex flex-col items-center text-center'>
            <Text level='p' className='paragraph'>
              CAN'T DECIDE?
            </Text>
            <Text level='h4' className='heading-4'>
              Talk to our counsellors
            </Text>
          </div>

          <form className='mx-auto mt-4 w-full  rounded-md bg-white p-4 shadow-md'>
            {/* <h2 className='mb-4 text-xl font-semibold'>My Form</h2> */}
            <div className='mb-4'>
              <label htmlFor='input1' className='mb-1 block font-medium'>
                Your Name
              </label>
              <input
                type='text'
                id='input1'
                className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='input2' className='mb-1 block font-medium'>
                Your Contact No.
              </label>
              <input
                type='text'
                id='input2'
                className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='dropdown' className='mb-1 block font-medium'>
                Your profession
              </label>
              <select
                id='dropdown'
                className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                <option value='option1'>Student</option>
                <option value='option2'>Working Professional</option>
                <option value='option3'>Other</option>
              </select>
            </div>
            <button
              type='submit'
              className='w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-indigo-600'
            >
              Talk to us
            </button>
          </form>
        </GridContainer>
      </FlexContainer>
    </Section>
  );
};

export default TechEducationForEveryone;
