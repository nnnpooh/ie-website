import { NextPage } from "next";
import {
  Container,
  Card,
  Stack,
  Title,
  Text,
  Badge,
  Table,
} from "@mantine/core";
import Image from "next/image";
import ResearchCenterCard from "@components/research_centers/ResearchCenterCard";
import { getResearchCenters } from "@api/dataResearchCenter";
import { ResearchCenterType } from "@api/types/manual";

interface props {
  data: ResearchCenterType[];
}

const ResearchCenter: NextPage<props> = ({ data: rcs }) => {
  console.log({ rcs });
  return (
    <div className="bg-gray-800">
      <Container size="xl" className="py-4">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-white">Faculty</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {rcs?.map((res) => (
            <ResearchCenterCard res={res} key={res.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ResearchCenter;

export async function getStaticProps() {
  const { data } = await getResearchCenters();

  console.log({ data });
  return {
    props: {
      data,
    },
  };
}
