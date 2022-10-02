import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/layouts/Navbar';
import Carousel from '../../components/layouts/Carousel';
import Footer from '../../components/layouts/Footer';
import styles from '/styles/Layout.module.css';
function ContactPage() {
  return (
    <div>
      <div className='contact_container'>
        <div className='contact_title_container'>
          <h3>Contact</h3>
        </div>
        <div className='contact_container_body'>
          <div className='flex flex-wrap'>
            <div className='md:w-1/2 md:p-4 mt-4'>
              <h3>Map</h3>
              <div className='md:p-4'>
                <iframe
                  className='w-full h-96'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0623839901814!2d98.94944231484689!3d18.795372987249504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6de4ff030f%3A0x356e11b17f0636bd!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4Lit4Li44LiV4Liq4Liy4Lir4LiB4Liy4Lij!5e0!3m2!1sth!2sth!4v1657441662767!5m2!1sth!2sth'
                  style={{ border: 0 }}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
            <div className='md:w-1/2 md:p-4 mt-4'>
              <h3>Contact Detail</h3>
              <p className='mt-4'>
                Department of Industrial Engineering, Faculty of Engineering,
                Chiang Mai University. 239 Huay Kaew Road, Muang District,
                Chiang Mai ,Thailand 50200
              </p>
              <div className='p-4'>
                <p>(+66)053-944125-6, 053-944183</p>
                <p>085-0932906</p>
                <p>053-944185,053-944125-126 #104</p>
                <p>iecmu000@gmail.com</p>
              </div>

              <div className='mt-4'>
                <div className='flex'>
                  <div className='w-4/12'>
                    <h3>Topic :</h3>
                    <p>Put your topic here</p>
                  </div>
                  <div className='w-8/12'>
                    <input
                      className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      type='text'
                      placeholder='Text'
                    />
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-4/12'>
                    <h3>Name :</h3>
                    <p>Put your name here</p>
                  </div>
                  <div className='w-8/12'>
                    <input
                      className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      type='text'
                      placeholder='Text'
                    />
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-4/12'>
                    <h3>Email :</h3>
                    <p>Type email address</p>
                  </div>
                  <div className='w-8/12'>
                    <input
                      className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      type='text'
                      placeholder='Text'
                    />
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-4/12'>
                    <h3>Tel :</h3>
                    <p>Type tel</p>
                  </div>
                  <div className='w-8/12'>
                    <input
                      className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      type='text'
                      placeholder='Text'
                    />
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-4/12'>
                    <h3>Message :</h3>
                    <p>Type message</p>
                  </div>
                  <div className='w-8/12'>
                    <textarea
                      className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      placeholder='Text'
                    />
                  </div>
                </div>
                <div className='text-center mt-10 mb-10'>
                  <button className={styles.btnSubmit}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
