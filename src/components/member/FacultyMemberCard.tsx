import { FC } from "react";
import Image from "next/image";
import { Card, Center } from "@mantine/core";
import { useRouter } from "next/router";
import { FacultyType } from "@api/types/manual";

interface Props {
  fac: FacultyType;
}

const FacultyMemberCard: FC<Props> = ({ fac }) => {
  const router = useRouter();
  const lang = router.locale;

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
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
        <div className="text-md font-bold text-primary">
          {lang === "th" ? fac.fullNameTh : fac.fullNameEn}
        </div>
        <h3>{fac.adminPositionTh}</h3>
      </div>
    </Card>
  );
};

export default FacultyMemberCard;
