import '../styles/globals.css';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/industrial_engineering_logo.ico' />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='วิศวกรรมศาสตร์, รับสมัคร, ปริญญาตรี, ปริญญาโท, ปริญญาเอก, หลักสูตร, ศึกษาต่อ, ทุนการศึกษา, ดูงาน, ศึกษาดูงาน, IE, CMU, Industrial Engineering, Chiang Mai'
        />
      </Head>
      <NextSeo
        title='ไออี มช | ภาควิชาวิศวกรรมอุตสาหการ | คณะวิศวกรรมศาสตร์ | มหาวิทยาลัยเชียงใหม่'
        description='ไออี มช | ภาควิชาวิศวกรรมอุตสาหการ | คณะวิศวกรรมศาสตร์ | มหาวิทยาลัยเชียงใหม่'
        openGraph={{
          type: 'website',
        }}
      />

      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Prompt',
        }}
      >
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default MyApp;
