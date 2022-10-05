import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { RootQuery, Maybe, Staff } from "./types/graphql";
import { STAFF_FRAGMENT } from "./graphql/fragments";
import { StaffType } from "./types/manual";

export async function getStaffs() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${STAFF_FRAGMENT}
      query NewQuery {
        staffs {
          nodes {
            content
            id
            databaseId
            title
            staff_fields {
              ...Staff_StaffFieldsFragment
            }
          }
        }
      }
    `,
  });

  const dataOut = data.staffs?.nodes?.map((el) => formatStaff(el));

  // console.log({ dataOut });
  return { data: dataOut };
}

function formatStaff(data: Maybe<Staff> | undefined) {
  //  Flatten object
  const staff: StaffType = {
    ...data?.staff_fields,
    id: data?.id,
    databaseId: data?.databaseId,
    phone: formatJSONArray(data?.staff_fields.phoneJson),
    email: formatJSONArray(data?.staff_fields.emailJson),
    positionTh: formatJSONArray(data.staff_fields.positionThJson),
    positionEn: formatJSONArray(data.staff_fields.positionEnJson),
  };

  return staff;
}

function formatJSONArray(s: Maybe<string> | undefined): string[] {
  return JSON.parse(s || "[]");
}
