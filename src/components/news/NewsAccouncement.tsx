import { NextPage } from "next";
import { AnnouncementDataType } from "@src/api";
import Image from "next/image";
import { Container, Card, Center, Badge, Tabs } from "@mantine/core";
import { IconPhoto, IconBrandMeta } from "@tabler/icons";
import ScrollContainer from "react-indiana-drag-scroll";

interface Props {
  data: AnnouncementDataType[];
}

const NewsAnnouncement: NextPage<Props> = ({ data }) => {
  console.log({ data });
  return (
    <ScrollContainer className="p-4" hideScrollbars={false}>
      <div
        className="grid grid-flow-col gap-4"
        style={{ gridAutoColumns: "21%" }}
      >
        {data.map((el) => (
          <Card
            key={el.id}
            className="hover:scale-105 transition-transform ease-in-out cursor-pointer"
            shadow="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              {el.coverPhoto ? (
                <div className="relative h-60 w-full">
                  <Image
                    src={el.coverPhoto.sourceUrl}
                    layout="fill"
                    objectFit="cover"
                    alt={el.titleTh}
                  />
                </div>
              ) : (
                <div className="h-60 bg-gradient-to-tr from-primary-200 to-primary-700 flex items-center justify-center">
                  <IconPhoto className="text-white" size={80} />
                </div>
              )}
            </Card.Section>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-start">
                <div className="flex items-center justify-between w-full">
                  <Badge
                    variant="gradient"
                    gradient={{ from: "cmu.7", to: "cmu.3" }}
                  >
                    {el.announcementTypes[0].name}
                  </Badge>

                  <div className="text-sm text-gray-400">
                    {new Date(el.created_time_ms).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-sm">{trim(el.titleTh, 60)}</div>
            </div>
          </Card>
        ))}
      </div>
    </ScrollContainer>
  );
};

export default NewsAnnouncement;

function trim(text: string, num: number) {
  if (text.length > num) {
    // I cannot use text.slice() because it will mess up the emoji.  Use this technique from https://stackoverflow.com/a/61210496
    const arrText = Array.from(text);
    return `${arrText.slice(0, num).join("")}...`;
  } else {
    return text;
  }
}
