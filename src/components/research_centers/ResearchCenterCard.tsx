import { FC } from "react";
import Image from "next/image";
import { Card, Center, Badge, Divider } from "@mantine/core";
import { useRouter } from "next/router";
import { IconMail, IconPhone } from "@tabler/icons";
import { ResearchCenterType } from "@api/types/manual";

interface Props {
  res: ResearchCenterType;
}

const ResearchCenterCard: FC<Props> = ({ res }) => {
  const router = useRouter();
  const lang = router.locale;

  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      className="cursor-pointer hover:scale-101 transition-transform"
      onClick={() => {
        router.push(`/research_centers/${res.databaseId}`);
      }}
    >
      <Card.Section>
        {/* Top gradient section */}
        <Center
          className="relative h-24 w-full"
          sx={(theme) => ({
            backgroundImage: theme.fn.gradient({
              from: "cmu.9",
              to: "cmu.6",
              deg: 45,
            }),
            color: theme.white,
          })}
        >
          {/* Profile image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-md">
              <Image
                src={res.coverImage?.sourceUrl || ""}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt={res.fullNameEn}
              />
            </div>
          </div>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default ResearchCenterCard;
