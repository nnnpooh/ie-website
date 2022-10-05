import { useRouter } from "next/router";
import { NextPage, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ResearchCenterType } from "@api/types/manual";
import { getResearchCenters, getResearchCenterByDatabaseId } from "@src/api";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface props {
  data: ResearchCenterType;
}

const ResearchCenter: NextPage<props> = ({ data: rc }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Content</h1>
      <div
        className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600"
        dangerouslySetInnerHTML={{
          __html: rc ? (rc.content as string) : "",
        }}
      />
    </div>
  );
};

export default ResearchCenter;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const databaseId = parseInt(id);
  console.log({ databaseId });
  const { data } = await getResearchCenterByDatabaseId(databaseId);

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
  const { data: dataReses } = await getResearchCenters();

  const pathsTh = dataReses.map((res) => ({
    params: { id: res.databaseId?.toString() || "" },
    locale: "th",
  }));

  const pathsEn = dataReses.map((res) => ({
    params: { id: res.databaseId?.toString() || "" },
    locale: "en",
  }));

  return { paths: pathsTh.concat(pathsEn), fallback: "blocking" };
}
