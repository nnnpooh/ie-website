import FacultyMemberCard from "@/components/member/FacultyMemberCard";
import { FacultyType, ResearchAreaType } from "@/src/api/types/manual";
import { getFaculties, getResearchAreas } from "@/src/api";
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
  // console.log({ facs, resAreas });

  return (
    <div className="bg-gray-300">
      <Container size="xl">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-primary">Faculty</div>
        </div>
        <div className="flex flex-wrap">
          {facs?.map((fac) => (
            <FacultyMemberCard fac={fac} />
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
