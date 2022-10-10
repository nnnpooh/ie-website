import { useRouter } from "next/router";
import { NextPage, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { AnnouncementDataType } from "@api/types/manual";
import { Container, Breadcrumbs } from "@mantine/core";
import Image from "next/image";
import { getAnnouncements, getAnnouncementByDatabaseId } from "@src/api";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface props {
  data: AnnouncementDataType;
}

const AnnouncementInd: NextPage<props> = ({ data: ann }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="bg-gray-800">
        <Container className="py-2">
          <Breadcrumbs className="text-white">Link</Breadcrumbs>
        </Container>
        {JSON.stringify(ann)}
      </div>
    </>
  );
};

export default AnnouncementInd;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const databaseId = parseInt(id);
  const { data } = await getAnnouncementByDatabaseId(databaseId);

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

export async function getStaticPaths({ locales }) {
  const { dataAnnouncement: data } = await getAnnouncements();

  const pathsTh = data.map((ann) => ({
    params: { id: ann.databaseId?.toString() || "" },
    locale: "th",
  }));

  const pathsEn = data.map((ann) => ({
    params: { id: ann.databaseId?.toString() || "" },
    locale: "en",
  }));

  return { paths: pathsTh.concat(pathsEn), fallback: "blocking" };
}
