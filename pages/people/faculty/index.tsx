import FacultyMemberCard from "@/components/member/FacultyMemberCard";
import { FacultyType, ResearchAreaType } from "@/src/api/types/manual";
import { getFaculties, getResearchAreas } from "@/src/api";
import { NextPage } from "next";

interface props {
  dataFaculties: FacultyType[];
  dataResearchAreas: ResearchAreaType[];
}

const FacultyMemberPage: NextPage<props> = ({
  dataFaculties: facs,
  dataResearchAreas: resAreas,
}) => {
  console.log({ facs, resAreas });

  return (
    <div>
      <div className="contact_container">
        <div className="contact_title_container">
          <h3>Faculty Members</h3>
        </div>

        <div className="mt-4 flex flex-wrap">
          {facs?.map((fac) => (
            <div className="md:w-1/3 p-4" key={fac.id}>
              <FacultyMemberCard item={fac} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyMemberPage;

export async function getStaticProps() {
  const { data: dataFaculties } = await getFaculties();
  const { data: dataResearchAreas } = await getResearchAreas();
  // getFacultyByDatabaseId(6);
  return {
    props: {
      dataFaculties,
      dataResearchAreas,
    },
  };
}