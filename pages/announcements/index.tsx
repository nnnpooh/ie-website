import { NextPage } from "next";
import { Container } from "@mantine/core";
import Image from "next/image";
import { getAnnouncements } from "@src/api";
import { AnnouncementDataType } from "@api/types/manual";

interface props {
  data: AnnouncementDataType[];
}

const AnnouncementMain: NextPage<props> = ({ data: ann }) => {
  console.log({ ann });
  return (
    <div className="bg-gray-800">
      <Container size="xl" className="py-4">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-white">Faculty</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {ann?.map((res) => (
            <div>{res.databaseId}</div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AnnouncementMain;

export async function getStaticProps() {
  const { dataAnnouncement: data } = await getAnnouncements();

  console.log({ data });
  return {
    props: {
      data,
    },
  };
}
