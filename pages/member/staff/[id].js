import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import styles from "./Staff.module.css";
function StaffDetailPage() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/industrial_engineering_logo.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="วิศวกรรมศาสตร์, รับสมัคร, ปริญญาตรี, ปริญญาโท, ปริญญาเอก, หลักสูตร, ศึกษาต่อ, ทุนการศึกษา, ดูงาน, ศึกษาดูงาน, IE, CMU, Industrial Engineering, Chiang Mai"
        />
      </Head>
      <NextSeo
        title="ไออี มช | ภาควิชาวิศวกรรมอุตสาหการ | คณะวิศวกรรมศาสตร์ | มหาวิทยาลัยเชียงใหม่"
        description="ไออี มช | ภาควิชาวิศวกรรมอุตสาหการ | คณะวิศวกรรมศาสตร์ | มหาวิทยาลัยเชียงใหม่"
        keywords=""
        openGraph={{
          type: "website",
        }}
      />
      <Navbar />
      <main>
        <div className="contact_container">
          <div className="contact_title_container">
            <h3>Supporting Staff > Wuttinun Inthayot</h3>
          </div>
          <div className="contact_container_body">
            <div className="flex flex-wrap md:px-10 mt-4">
              <div className="md:w-1/3 w-full p-4">
                <img src="/demo/member/29-WN.png" className="w-full" />
              </div>
              <div className="md:w-2/3 w-full p-4">
                <h3>Wuttinun Inthayot</h3>
                <h3>Position: Operational staff training</h3>
                <div className="mt-12">
                  <p>iecmu@hotmail.com</p>
                  <p>053-944125, 053-944183,053-944126 ต่อ 103</p>
                </div>
                <div className="mt-12">
                  <button type="button" className={styles.btnDownload}>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 p-4">
              <h3>Personal Information</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="mt-12 p-4">
              <h3>Work Experience</h3>
              <ul className="list-disc px-5">
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StaffDetailPage;
