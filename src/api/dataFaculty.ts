import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { RootQuery, Maybe, ResearchCenter } from './types/graphql';
import {
  FACULTY_FRAGMENT,
  RESEARCH_AREA_FRAGMENT,
  RESEACH_CENTER_FRAGMENT,
} from './graphql/fragments';
import { FacultyType } from './types/faculty';
import { EducationItem, academicRankMap } from './types/faculty';

export async function getFaculties() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${FACULTY_FRAGMENT}
      ${RESEARCH_AREA_FRAGMENT}
      ${RESEACH_CENTER_FRAGMENT}
      query FacultyQuery {
        faculties {
          nodes {
            content
            databaseId
            id
            faculty_fields {
              ...Faculty_FacultyFieldsFragment
            }
            researchAreas {
              nodes {
                ...ResearchAreaFragment
              }
            }
            facResLinks {
              nodes {
                researchCenters {
                  nodes {
                    databaseId
                    id
                    research_center_fields {
                      ...ResearchCenter_ResearchCenterFieldsFragment
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const temp = data.faculties?.nodes?.map((el) => {
    let researchCenters: unknown[] = [];
    el?.facResLinks?.nodes?.forEach((node1) => {
      node1?.researchCenters?.nodes?.forEach((node2) => {
        if (node2?.research_center_fields) {
          const dt = {
            ...node2.research_center_fields,
            id: node2.id,
            databaseId: node2.databaseId,
          };
          researchCenters.push(dt);
        }
      });
    });

    return {
      ...el?.faculty_fields,
      id: el?.id,
      databaseId: el?.databaseId,
      researchCenters: researchCenters as ResearchCenter[],
      researchAreas: el?.researchAreas?.nodes?.map((ra) => ({ ...ra })),
    };
  });

  const facs: unknown = temp?.map((fac) => ({
    ...fac,
    email: formatJSONArray(fac.emailJson),
    phone: formatJSONArray(fac.phoneJson),
    adminPositionTh: formatJSONArray(fac.adminPositionThJson),
    adminPositionEn: formatJSONArray(fac.adminPositionEnJson),
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

  return { data: facs as FacultyType };
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
