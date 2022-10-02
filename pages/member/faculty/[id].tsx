import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '../../../components/layouts/Navbar';
import Footer from '../../../components/layouts/Footer';
import styles from './Faculty.module.css';
import ResearchInterestCard from '../../../components/research/ResearchInterestCard';
import Image from 'next/image';

function StaffDetailPage() {
  return (
    <div>
      <div className='contact_container'>
        <div className='contact_title_container'>
          <h3>Faculty Members &gt; Chonnanath Kritworakarn, Ph.D.</h3>
        </div>
        <div className='contact_container_body'>
          <div className='flex flex-wrap md:px-10 mt-4'>
            <div className='md:w-1/3 w-full p-4'>
              <div className='relative h-full'>
                <Image
                  src='/demo/member/02-CK.jpg'
                  alt='Factulty Image'
                  layout={'fill'}
                  objectFit={'contain'}
                />
              </div>
            </div>
            <div className='md:w-2/3 w-full p-4'>
              <h3>Associate Professor</h3>
              <h3>Chonnanath Kritworakarn, Ph.D.</h3>
              <div className='mt-12'>
                <p>chonnanath.krit@gmail.com</p>
                <p>053-944125, 053-944183,053-944126 ต่อ 304</p>
                <p>https://example.com</p>
              </div>
              <div className='mt-12'>
                <div className='flex flex-wrap'>
                  <div className='w-full md:w-1/3 p-4'>
                    <button type='button' className={styles.btnDownload}>
                      Download CV
                    </button>
                  </div>
                  <div className='w-full md:w-1/3 p-4'>
                    <button type='button' className={styles.btnDownload}>
                      Research Gate
                    </button>
                  </div>
                  <div className='w-full md:w-1/3 p-4'>
                    <button type='button' className={styles.btnDownload}>
                      Google Scholar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 p-4'>
            <h3>Personal Information</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className=''>
            <table className='w-full table-fixed border border-collapse border-slate-500'>
              <thead>
                <tr>
                  <th className='border'>วุฒิการศึกษา</th>
                  <th className='border'>ปี</th>
                  <th className='border'>สถาบัน</th>
                  <th className='border'>สาขา</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border'>Doctor of Philosophy</td>
                  <td className='border'>2543</td>
                  <td className='border'>Vanderbilt University, TN, USA</td>
                  <td className='border'>Management of Technology</td>
                </tr>
                <tr>
                  <td className='border'>Master of Engineering</td>
                  <td className='border'>2540</td>
                  <td className='border'>Vanderbilt University, TN, USA</td>
                  <td className='border'>Management of Technology</td>
                </tr>
                <tr>
                  <td className='border'>Master of Engineering</td>
                  <td className='border'>2535</td>
                  <td className='border'>จุฬาลงกรณ์มหาวิทยาลัย, ประเทศไทย</td>
                  <td className='border'>วิศวกรรมอุตสาหการ</td>
                </tr>
                <tr>
                  <td className='border'>วิศวกรรมศาสตร์บัณฑิต</td>
                  <td className='border'>2540</td>
                  <td className='border'>หมาวิทยาลัยขอนแก่น, ประเทศไทย</td>
                  <td className='border'>วิศวกรรมอุตสาหการ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-12 p-4'>
            <h3>Work Experience</h3>
            <ul className='list-disc px-5'>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </li>
            </ul>
          </div>

          <div className='mt-12 p-4'>
            <h3>Research interests</h3>
            <ResearchInterestCard />
            <ResearchInterestCard />
            <ResearchInterestCard />
            <ResearchInterestCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffDetailPage;
