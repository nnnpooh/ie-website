import { StaffType } from "@src/api/types/manual";
import { getStaffs } from "@src/api/dataStaff";
import { NextPage } from "next";
import StaffCard from "@components/member/StaffCard";
import { Container } from "@mantine/core";

interface props {
  dataStaffs: StaffType[];
}

const StaffPage: NextPage<props> = ({ dataStaffs: staffs }) => {
  // console.log({ staffs });
  return (
    <div>
      <Container size={"lg"}>
        {staffs?.map((staff) => (
          <StaffCard staff={staff} key={staff.id} />
        ))}
      </Container>
    </div>
  );
};

export default StaffPage;

export async function getStaticProps() {
  const { data: dataStaffs } = await getStaffs();
  return {
    props: {
      dataStaffs,
    },
  };
}
