import { FC } from "react";
import Image from "next/image";
import { Card, Center, Badge, Divider } from "@mantine/core";
import { useRouter } from "next/router";
import { IconMail, IconPhone } from "@tabler/icons";
import { FacultyType } from "@api/types/manual";

interface Props {
  fac: FacultyType;
}

const FacultyCard: FC<Props> = ({ fac }) => {
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

      {/* Name and Badge */}
      <div className="mt-24">
        <div className="flex flex-col items-center gap-1">
          <div className="text-md font-bold text-primary text-center">
            {lang === "th" ? fac.fullNameTh : fac.fullNameEn}
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {fac.adminPositionTh.map((el) => (
              <Badge key={el}>{el}</Badge>
            ))}
          </div>
        </div>

        <Divider my="sm" />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <IconMail size={15} className="text-primary" />
            <div className="text-sm">{fac.email[0]}</div>
          </div>

          <div className="flex items-center gap-2">
            <IconPhone size={15} className="text-primary" />
            <div className="text-sm">{fac.phone[0]}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FacultyCard;
