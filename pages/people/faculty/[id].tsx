import { useRouter } from 'next/router';
import { NextPage, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FacultyType } from '@api/types/manual';
import { Container, Breadcrumbs } from '@mantine/core';
import Image from 'next/image';
import { getFaculties, getFacultyByDatabaseId } from '@src/api';

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
      <div className='bg-gray-800'>
        <Container className='py-2'>
          <Breadcrumbs className='text-white'>Link</Breadcrumbs>
        </Container>
      </div>

      {/* Info */}
      <div className='bg-gray-200'>
        <Container className='py-4'>
          <div className='grid grid-cols-3'>
            <div className='col-span-1'>
              <div className='relative h-40 w-40'>
                <Image
                  src={fac.profileImage.sourceUrl}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top'
                />
              </div>
            </div>

            <div className='col-span-2'>
              <div>{fac.fullNameTh}</div>
            </div>
          </div>
        </Container>
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

export async function getStaticPaths({ locales }) {
  const { data: dataFaculties } = await getFaculties();

  const pathsTh = dataFaculties.map((fac) => ({
    params: { id: fac.databaseId?.toString() || '' },
    locale: 'th',
  }));

  const pathsEn = dataFaculties.map((fac) => ({
    params: { id: fac.databaseId?.toString() || '' },
    locale: 'en',
  }));

  return { paths: pathsTh.concat(pathsEn), fallback: 'blocking' };
}
