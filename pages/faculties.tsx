import { FC } from 'react';
import { NextPage } from 'next';
import { Maybe } from '../src/api/types/graphql';
import { Card, Title, Text, Badge, Table, Stack, Select } from '@mantine/core';
import { FacultyType } from '../src/api/types/faculty';
import { ResearchAreaType } from '../src/api/types/researchArea';
import {
  getFaculties,
  getResearchAreas,
  getFacultyByDatabaseId,
} from '../src/api';

interface props {
  dataFaculties: FacultyType[];
  dataResearchAreas: ResearchAreaType[];
}

const Faculties: NextPage<props> = ({
  dataFaculties: facs,
  dataResearchAreas: resAreas,
}) => {
  // console.log({ facs, resAreas });

  const LinkBadge: FC<{ url: Maybe<string> | undefined; name: string }> = ({
    url,
    name,
  }) => {
    if (!url) return <></>;
    return (
      <Badge variant='gradient' gradient={{ from: 'indigo', to: 'cyan' }}>
        <a href={url} target='_blank' rel='noreferrer'>
          {name}
        </a>
      </Badge>
    );
  };

  return (
    <Stack spacing={'md'}>
      <Select
        data={
          resAreas?.map((ra) => ({
            value: ra.name as string,
            label: ra.name as string,
          })) || []
        }
      />

      {facs?.map((fac) => (
        <Card shadow='sm' p='lg' key={fac.id}>
          <Card.Section>
            <img
              src={fac.profileImage?.sourceUrl || ''}
              sizes={fac.profileImage?.sizes || ''}
            />
          </Card.Section>

          <Title order={3}>{fac.fullNameEn}</Title>
          <Text>{fac.fullNameTh}</Text>

          {fac.adminPositionTh.map((pos) => (
            <Text key={pos}>{pos}</Text>
          ))}

          {fac.adminPositionEn.map((pos) => (
            <Text key={pos}>{pos}</Text>
          ))}

          <Text>
            {fac.email.map((el) => (
              <Badge key={el}>{el}</Badge>
            ))}
          </Text>

          <Text>
            {fac.phone.map((el) => (
              <Badge key={el}>{el}</Badge>
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
              {fac.education?.map((ed, idx) => (
                <tr key={idx}>
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

          <Title order={4}>Links</Title>
          <LinkBadge url={fac.linkCv} name={'CV'} />
          <LinkBadge url={fac.linkGoogleScholar} name={'Google Scholar'} />
          <LinkBadge url={fac.linkResearchGate} name={'Research Gate'} />
          <LinkBadge url={fac.linkPersonalHomepage} name={'Personal Page'} />
          <LinkBadge url={fac.linkLinkedin} name={'LinkedIn'} />

          <Title order={4}>Research Center</Title>

          <Text>
            {fac.researchCenters.map((rc) => (
              <Badge
                variant='gradient'
                gradient={{ from: 'orange', to: 'red' }}
                key={rc.databaseId}
              >
                {rc.fullNameEn}
              </Badge>
            ))}
          </Text>

          <Title order={4}>Research Area</Title>

          {fac.researchAreas?.map((ra) => (
            <Badge
              variant='gradient'
              gradient={{ from: 'teal', to: 'blue', deg: 60 }}
              key={ra.name}
            >
              {ra.name}
            </Badge>
          ))}

          <Title order={4}>More Details</Title>
          <a href={`/faculty/${fac.databaseId}`}>Link</a>
        </Card>
      ))}
    </Stack>
  );
};

export default Faculties;

export async function getStaticProps() {
  const { data: dataFaculties } = await getFaculties();
  const { data: dataResearchAreas } = await getResearchAreas();
  getFacultyByDatabaseId(6);
  return {
    props: {
      dataFaculties,
      dataResearchAreas,
    },
  };
}
