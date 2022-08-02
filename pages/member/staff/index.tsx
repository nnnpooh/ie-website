import Head from "next/head";
import { NextSeo } from "next-seo";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import SupportingStaffCard from "../../../components/member/SupportingStaffCard";

function SupportStaffPage() {
  return (
    <div>
      <div className="contact_container">
        <div className="contact_title_container">
          <h3>Supporting Staff</h3>
        </div>

        <div className="mt-4 flex flex-wrap">
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
          <div className="md:w-1/3 p-4">
            <SupportingStaffCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportStaffPage;
