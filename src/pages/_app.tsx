import { AppProps } from 'next/app';
import { PageLayout } from '@/components';
import '@/styles/globals.css';
import '@/styles/colors.css';

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
const TheBoringEducation = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <script async src={gtag}></script>

      <script >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </script>


      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
};

export default TheBoringEducation;
