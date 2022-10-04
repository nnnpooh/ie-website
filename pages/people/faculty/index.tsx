import FacultyMemberCard from "@components/member/FacultyMemberCard";
import { FacultyType, ResearchAreaType } from "@api/types/manual";
import { getFaculties, getResearchAreas } from "@src/api";
import { Container } from "@mantine/core";
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
    <div className="bg-gray-800">
      <Container size="xl" className="py-4">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-white">Faculty</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {facs?.map((fac) => (
            <FacultyMemberCard fac={fac} key={fac.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FacultyMemberPage;

export async function getStaticProps() {
  const { data: dataFaculties } = await getFaculties();
  const { data: dataResearchAreas } = await getResearchAreas();
  return {
    props: {
      dataFaculties,
      dataResearchAreas,
    },
  };
}
