import { FC } from "react";
import Image from "next/image";
import { Card, Center, Badge } from "@mantine/core";
import { useRouter } from "next/router";
import { IconMail, IconPhone } from "@tabler/icons";
import { FacultyType } from "@api/types/manual";

interface Props {
  fac: FacultyType;
}

const FacultyMemberCard: FC<Props> = ({ fac }) => {
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
        router.push(`/people/faculty/${fac.databaseId}`);
      }}
    >
      <Card.Section>
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-md">
              <Image
                src={fac.profileImage?.sourceUrl || ""}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt={fac.fullNameEn}
              />
            </div>
          </div>
        </Center>
      </Card.Section>
      <div className="mt-24">
        <div className="flex flex-col items-center">
          <div className="text-md font-bold text-primary">
            {lang === "th" ? fac.fullNameTh : fac.fullNameEn}
          </div>
          <div className="flex gap-2">
            {fac.adminPositionTh.map((el) => (
              <Badge>{el}</Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 items-center">
          <IconMail size={15} className="col-span-1 text-primary" />
          <div className="col-span-11 flex gap-x-2 flex-wrap text-sm">
            {fac.email.map((el) => (
              <div key={el}>{el}</div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 items-center">
          <IconPhone size={15} className="col-span-1 text-primary" />
          <div className="col-span-11 flex gap-x-2 flex-wrap text-sm">
            {fac.phone.map((el) => (
              <div key={el}>{el}</div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FacultyMemberCard;
