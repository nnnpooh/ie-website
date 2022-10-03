import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@mantine/core";
import { FacultyType } from "@/src/api/types/manual";

interface Props {
  fac: FacultyType;
}
const FacultyMemberCard: FC<Props> = ({ fac }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <div className="relative h-80 w-full bg-red-300">
          <Image
            src={fac.profileImage?.sourceUrl || ""}
            layout="fill"
            objectFit="cover"
            alt="..."
          />
        </div>
      </Card.Section>
      <div className="mt-4">
        <h3>Associate Professor</h3>
        <h3>{fac.fullNameEn}</h3>
        <h3>{fac.adminPositionEn}</h3>
      </div>
    </Card>
  );
};

export default FacultyMemberCard;
