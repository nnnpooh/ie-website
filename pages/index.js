import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../components/layouts/Navbar";
import Carousel from "../components/layouts/Carousel";
import HomeNews from "../components/news/HomeNews";
import Footer from "../components/layouts/Footer";
import HomeCurriculum from "../components/curriculum/HomeCurriculum";
import ExternalLink from "../components/layouts/ExternalLink";
import HomeResearch from "../components/research/HomeResearch";
import Partner from "../components/layouts/Partner";
export default function Home() {
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
        <Carousel />

        <div>
          <HomeNews />
        </div>
        <div>
          <HomeCurriculum />
        </div>
        <div>
          <ExternalLink />
        </div>
        <div>
          <HomeResearch />
        </div>
        <div>
          <Partner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
