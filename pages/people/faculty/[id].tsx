import { useRouter } from "next/router";
import { NextPage, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FacultyType } from "@/src/api/types/manual";
import { Container, Breadcrumbs } from "@mantine/core";
import Image from "next/image";
import { getFaculties, getFacultyByDatabaseId } from "@/src/api";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface props {
  data: FacultyType;
}

const Faculty: NextPage<props> = ({ data: fac }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="bg-gray-800">
        <Container>
          <Breadcrumbs>fsdfd</Breadcrumbs>
        </Container>
      </div>
      <div>
        <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-md">
          <Image
            src={fac.profileImage.sourceUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </>
  );
};

export default Faculty;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const databaseId = parseInt(id);
  const { data } = await getFacultyByDatabaseId(databaseId);

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
};

export async function getStaticPaths() {
  const { data: dataFaculties } = await getFaculties();

  const paths = dataFaculties.map((fac) => ({
    params: { id: fac.databaseId?.toString() || "" },
  }));

  return { paths, fallback: "blocking" };
}
