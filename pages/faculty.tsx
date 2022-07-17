import { gql } from '@apollo/client';
import client from '../apollo-client';
import { NextPage } from 'next';
import {
  RootQuery,
  RootQueryToFacultyConnection,
} from '../src/generated/graphql';
import { Card, Title, Text, Badge } from '@mantine/core';

interface props {
  data: Pick<RootQuery, 'faculties'>;
}

const Faculty: NextPage<props> = ({ data }) => {
  console.log({ data: data.faculties });
  const temp = data.faculties?.nodes?.map((el) => ({
    id: el?.databaseId,
    ...el?.faculty_fields,
  }));

  const facs = temp?.map((fac) => ({
    ...fac,
    email: JSON.parse(fac.emailJson || '[]') as string[],
    phone: JSON.parse(fac.phoneJson || '[]') as string[],
  }));

  return (
    <>
      {facs?.map((fac) => (
        <Card shadow='sm' p='lg'>
          <Title order={3}>
            {fac.titleEn} {fac.firstnameEn} {fac.lastnameEn}
          </Title>
          <Text>
            {fac.titleTh} {fac.firstnameTh} {fac.lastnameTh}
          </Text>

          <Text>
            {fac.email.map((el) => (
              <Badge>{el}</Badge>
            ))}
          </Text>

          <Text>
            {' '}
            {fac.phone.map((el) => (
              <Badge>{el}</Badge>
            ))}
          </Text>
        </Card>
      ))}
    </>
  );
};

export default Faculty;

export async function getStaticProps() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      query FacultyQuery {
        faculties {
          nodes {
            databaseId
            faculty_fields {
              emailJson
              fieldGroupName
              firstnameEn
              firstnameTh
              lastnameEn
              lastnameTh
              phoneJson
              titleEn
              titleTh
            }
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
