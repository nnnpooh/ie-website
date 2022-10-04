import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "../src/components/layouts/Navbar";
import Footer from "../src/components/layouts/Footer";
import Image from "next/image";

function AboutPage() {
  return (
    <div>
      <div className="bg-white pb-24">
        <div className="relative h-80">
          <Image
            src="/images/about.jpg"
            layout="fill"
            objectFit="cover"
            alt="about"
          />
        </div>
        <div className="mx-auto md:px-52 p-4">
          <div className="mt-20 text-center">
            <h1>ABOUT</h1>
            <h3>Department of Industrial Engineering</h3>
          </div>
          <div className="mt-12">
            <h3>
              Industrial Engineering Associate Building, Building No. 06118,
              Faculty of Engineering
            </h3>
          </div>

          <div className="mt-12">
            <h3>
              The specific teaching & learning profile of your institution in IE
            </h3>
            <p className="mt-4">
              {`Department of Industrial Engineering, Chiang Mai University
              provides up-to-date knowledge and technology for our students in
              various fields. The department have faculty members and supported
              laboratories in the followng fields: 1) Operations Research in
              Production Planning 2) Advanced manufacturing processes and
              materials 3) Automation and robotics 4) Quality in production
              systems 5) Logistics and supply chain management 6) Human factor
              7) Environmental assessment and green production 8) Healthcare
              Engineering. The department encourage active learning style and
              using 21st century learning methods in various kinds for enhancing
              student learning. Students can select cooperative program that
              students work at the real factory domestically and
              internationally. Thoughout each academic year, students involve in
              many leadership and teamwork building activities; which encourage
              student to take a role in organizing activities and manage the
              activities according to the plan and budget. For the student's
              senior year, most students have to conduct designing and/or
              productivity improvement projects at real manufactuirng factories
              under supervision of professors in our department. The student
              must demonstrate critical thinking skills, communication skills
              and Engineering technical skills through senior project
              examinations. For graduate study, the department provides 3 master
              programs: 1) Industrial Engineering 2) Logistics Engineering and
              supply chain management 3) Industrial Management and 1 Ph.D.
              program in Industrial Engineering. The graduate students involve
              in industry research problems and several funding institutues'
              grants.`}
            </p>
          </div>

          <div className="mt-12">
            <h3>
              The specific teaching & learning profile of your institution in IE
            </h3>
            <p className="mt-4">
              The department of Industrial Engineering, Chiang Mai University,
              provides various fields of research. There are 8 main research
              fields that faculty members engage in; 1) Operations research 2)
              Statistical analysis for modern quality system 3) Logistics
              Engineering and supply chain management 4) Advanced manufacturing
              processes and advanced materials 5) Automation and robotics 6)
              Human factor 7) Enviromental design and assessment 8) Healthcare
              Engineering. Each research field laboratories consist of
              professors in our department and some other professors from other
              related departments or faculties domestically and internationally.
              Graduate students whom works in each of the laboratories have some
              full or partial funding from the labs via scholarships, financial
              support fund, fellowship from department, faculty of Engineering,
              or university fellowships and/or research grants. In additions,
              some laboratories also works with other research institutes in
              Bangkok and other provinces areas. The department also involves in
              3 EUs funding projects recently in capacity building programs and
              introducing new curriculum in Industrial Engineering, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
