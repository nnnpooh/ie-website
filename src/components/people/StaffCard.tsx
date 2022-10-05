import { FC } from "react";
import Image from "next/image";
import { Card, Center, Badge, Divider } from "@mantine/core";
import { useRouter } from "next/router";
import { IconMail, IconPhone } from "@tabler/icons";
import { StaffType } from "@api/types/manual";

interface Props {
  staff: StaffType;
}

const StaffCard: FC<Props> = ({ staff }) => {
  return <div>{JSON.stringify(staff)}</div>;
};

export default StaffCard;
