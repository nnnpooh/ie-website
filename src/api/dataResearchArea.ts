import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { RESEARCH_AREA_FRAGMENT } from "./graphql/fragments";
import { ResearchAreaType } from "./types/manual";
import { RootQuery } from "./types/graphql";

export async function getResearchAreas() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${RESEARCH_AREA_FRAGMENT}
      query ResearchAreaQuery {
        researchAreas {
          nodes {
            ...ResearchAreaFragment
          }
        }
      }
    `,
  });

  const researchAreas: unknown = data.researchAreas?.nodes?.map((node) => ({
    ...node,
  }));

  return { data: researchAreas as ResearchAreaType[] };
}
