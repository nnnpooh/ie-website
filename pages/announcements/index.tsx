import { NextPage } from "next";
import { Container, Badge } from "@mantine/core";
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
        <div className="flex flex-col gap-2 mt-4">
          {ann?.map((ann) => (
            <div key={ann.id} className="flex gap-4 bg-white p-2">
              <div className="relative w-40 h-40 rounded-lg overflow-hidden">
                {ann.coverPhoto?.sourceUrl ? (
                  <Image
                    src={ann.coverPhoto.sourceUrl}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div>Default Image</div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex gap-2 flex-wrap">
                  {ann.announcementTypes.map((el) => (
                    <Badge key={el.id}> {el.name}</Badge>
                  ))}
                </div>
                <div>{ann.titleTh}</div>
                <div>{new Date(ann.created_time_ms).toLocaleDateString()}</div>
              </div>
            </div>
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
