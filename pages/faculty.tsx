import { FC } from 'react';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { NextPage } from 'next';
import { RootQuery, Maybe } from '../src/generated/graphql';
import {
  EducationItem,
  academicRankMap,
  ResearchCenter,
} from '../src/types/faculty.types';
import { Card, Title, Text, Badge, Table, Stack, Select } from '@mantine/core';
// import Image from 'next/image';
// import profileDefault from '../public/profile_default.jpg';

interface props {
  data: Pick<RootQuery, 'faculties'>;
  dataResearchArea: Pick<RootQuery, 'researchAreas'>;
}

function formatJSONArray(s: Maybe<string> | undefined): string[] {
  return JSON.parse(s || '[]');
}

function formatJSONEducation(s: Maybe<string> | undefined): EducationItem[] {
  return JSON.parse(s || '[]') as EducationItem[];
}

function formatFullNameTh(
  firstname: Maybe<string> | undefined,
  lastname: Maybe<string> | undefined,
  academicRank: Maybe<string> | undefined,
  isPhd: Maybe<string> | undefined
) {
  const rank = academicRankMap.find((rank) => rank.key === academicRank);
  const title = rank?.textAbbreTh;
  const phD = isPhd === 'Yes' ? 'ดร.' : '';
  const fullName = `${title}${phD}${firstname} ${lastname}`;
  return fullName;
}

function formatFullNameEn(
  firstname: Maybe<string> | undefined,
  lastname: Maybe<string> | undefined,
  academicRank: Maybe<string> | undefined,
  nameSuffixEn: Maybe<string> | undefined
) {
  const rank = academicRankMap.find((rank) => rank.key === academicRank);
  const title = rank?.textAbbreEn;
  const fullName = `${title} ${firstname} ${lastname}, ${nameSuffixEn}`;
  return fullName;
}

const Faculty: NextPage<props> = ({ data, dataResearchArea }) => {
  console.log({ data: data.faculties });
  const temp = data.faculties?.nodes?.map((el) => {
    let researchCenters: ResearchCenter[] = [];
    el?.facResLinks?.nodes?.forEach((node1) => {
      node1?.researchCenters?.nodes?.forEach((node2) => {
        if (node2?.research_center_fields) {
          const dt = { ...node2.research_center_fields, id: node2.databaseId };
          researchCenters.push(dt);
        }
      });
    });

    return {
      id: el?.databaseId,
      ...el?.faculty_fields,
      researchCenters,
      researchAreas: el?.researchAreas?.nodes?.map((ra) => ({ ...ra })),
    };
  });

  const facs = temp?.map((fac) => ({
    ...fac,
    email: formatJSONArray(fac.emailJson),
    phone: formatJSONArray(fac.phoneJson),
    education: formatJSONEducation(fac.educationJson),
    fullNameTh: formatFullNameTh(
      fac.firstnameTh,
      fac.lastnameTh,
      fac.academicRank,
      fac.isPhd
    ),
    fullNameEn: formatFullNameEn(
      fac.firstnameEn,
      fac.lastnameEn,
      fac.academicRank,
      fac.nameSuffixEn
    ),
  }));

  const researchAreaOptions = dataResearchArea.researchAreas?.nodes?.map(
    (node) => ({ ...node })
  );

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
          researchAreaOptions?.map((ra) => ({
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

          {fac.adminPositionTh && (
            <Text>
              ({fac.adminPositionTh} / {fac.adminPositionEn})
            </Text>
          )}
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
                key={rc.id}
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
            >
              {ra.name}
            </Badge>
          ))}
        </Card>
      ))}
    </Stack>
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
              isPhd
              educationJson
              academicRank
              adminPositionEn
              adminPositionTh
              displayOrder
              linkCv
              linkGoogleScholar
              linkPersonalHomepage
              linkResearchGate
              nameSuffixEn
              linkLinkedin
            }
            researchAreas {
              nodes {
                name
                slug
                id
              }
            }
            facResLinks {
              nodes {
                researchCenters {
                  nodes {
                    research_center_fields {
                      desEn
                      desTh
                      fieldGroupName
                      fullNameEn
                      fullNameTh
                    }
                    databaseId
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { data: dataResearchArea } = await client.query<RootQuery>({
    query: gql`
      query ResearchAreaQuery {
        researchAreas {
          nodes {
            name
            slug
            id
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
      dataResearchArea,
    },
  };
}
