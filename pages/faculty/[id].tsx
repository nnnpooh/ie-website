import { useRouter } from 'next/router';
import { NextPage, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FacultyType } from '../../src/api/types/faculty';
import { getFaculties, getFacultyByDatabaseId } from '../../src/api';

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface props {
  data: FacultyType;
}

const Faculty: NextPage<props> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  return <p>{JSON.stringify(data)}</p>;
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
    params: { id: fac.databaseId?.toString() || '' },
  }));

  console.log('here');
  return { paths, fallback: 'blocking' };
}
