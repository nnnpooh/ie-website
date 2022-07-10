import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import FacultyMemberCard from "../../../components/member/FacultyMemberCard";

function FacultyMemberPage() {
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
            <h3>Faculty Members</h3>
          </div>

          <div className="mt-4 flex flex-wrap">
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
            <div className="md:w-1/3 p-4">
                <FacultyMemberCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FacultyMemberPage;
