import { FC } from 'react';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { NextPage } from 'next';
import { RootQuery, Maybe } from '../src/api/types/graphql';
import { Card, Title, Text, Badge, Table } from '@mantine/core';
import Image from 'next/image';
import profileDefault from '../public/profile_default.jpg';

interface props {
  data: Pick<RootQuery, 'researchCenters'>;
}

const ResearchCenter: NextPage<props> = ({ data }) => {
  const temp = data.researchCenters?.nodes?.map((el) => ({
    id: el?.databaseId,
    ...el,
  }));

  const reses = temp?.map((res) => ({
    ...res,
  }));

  console.log({ data: data.researchCenters, reses });
  return (
    <>
      <div
        className='prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600'
        dangerouslySetInnerHTML={{
          __html: reses ? (reses[0].content as string) : '',
        }}
      />
    </>
  );
};

export default ResearchCenter;

export async function getStaticProps() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      query ResearchCenterQuery {
        researchCenters {
          nodes {
            content
            databaseId
            title
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
