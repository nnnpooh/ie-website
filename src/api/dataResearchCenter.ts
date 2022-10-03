import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { RootQuery, Maybe, ResearchCenter } from "./types/graphql";
import { FACULTY_FRAGMENT, RESEACH_CENTER_FRAGMENT } from "./graphql/fragments";
import { ResearchCenterType, FacultyType } from "./types/manual";
import { formatFacultyData } from "./dataFaculty";

export async function getResearchCenters() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${FACULTY_FRAGMENT}
      ${RESEACH_CENTER_FRAGMENT}
      query ResearchCenterQuery {
        researchCenters {
          nodes {
            content
            id
            databaseId
            title
            research_center_fields {
              ...ResearchCenter_ResearchCenterFieldsFragment
            }
            facResLinks {
              nodes {
                faculties {
                  nodes {
                    databaseId
                    id
                    faculty_fields {
                      ...Faculty_FacultyFieldsFragment
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

  const dataOut = data.researchCenters?.nodes?.map((el) =>
    formatResearchCenter(el)
  );

  console.log({ dataOut });
  return { data: dataOut };
}

export async function getResearchCenterByDatabaseId(databaseId: number) {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${FACULTY_FRAGMENT}
      ${RESEACH_CENTER_FRAGMENT}
      query ResearchCenterSingle {
        researchCenter(id: "", idType: DATABASE_ID) {
          id
          databaseId
          content
          title
          research_center_fields {
            ...ResearchCenter_ResearchCenterFieldsFragment
          }
          facResLinks {
            nodes {
              faculties {
                nodes {
                  id
                  databaseId
                  faculty_fields {
                    ...Faculty_FacultyFieldsFragment
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const dataOut = formatResearchCenter(data?.researchCenter);
  return { data: dataOut };
}

function formatResearchCenter(data: Maybe<ResearchCenter> | undefined) {
  // Organize the faculty data

  let faculties: unknown[] = [];

  data?.facResLinks?.nodes?.forEach((node1) => {
    node1?.faculties?.nodes?.forEach((node2) => {
      if (node2?.faculty_fields) {
        const dt = formatFacultyData(node2);
        faculties.push(dt);
      }
    });
  });

  //  Flatten object
  const res: ResearchCenterType = {
    ...data?.research_center_fields,
    id: data?.id,
    databaseId: data?.databaseId,
    title: data?.title,
    content: data?.content,
    faculties: faculties as FacultyType[],
  };

  return res;
}
