import { gql } from '@apollo/client';
import client from '../apollo-client';
import { NextPage } from 'next';
import { RootQuery } from '../src/generated/graphql';
import { EducationItem } from '../src/types/faculty.types';
import { Card, Title, Text, Badge, Table } from '@mantine/core';

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
    education: JSON.parse(fac.educationJson || '[]') as EducationItem[],
  }));

  console.log({ data: data.faculties, facs });

  return (
    <>
      {facs?.map((fac) => (
        <Card shadow='sm' p='lg' key={fac.id}>
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
            {fac.phone.map((el) => (
              <Badge>{el}</Badge>
            ))}
          </Text>

          <Table>
            <thead>
              <tr>
                <th>วุฒิการศึกษา / Degree</th>
                <th>ปี / Year</th>
                <th>สถาบัน / Institution</th>
                <th>สาขา / field</th>
              </tr>
            </thead>
            <tbody>
              {fac.education?.map((ed) => (
                <tr>
                  <td>
                    {ed.degree_th} / {ed.degree_en}
                  </td>
                  <td>
                    {ed.year_graduated_th} / {ed.year_graduated_en}
                  </td>

                  <td>
                    {ed.institution_th} / {ed.institution_en}
                  </td>
                  <td>
                    {ed.field_th} / {ed.field_en}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
            content
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
              isPhd
              educationJson
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
