import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import FacultyMemberCard from "../../../components/member/FacultyMemberCard";

function FacultyMemberPage() {
  return (
    <div>
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
    </div>
  );
}

export default FacultyMemberPage;
