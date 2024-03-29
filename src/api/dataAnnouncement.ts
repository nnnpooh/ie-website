import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { RootQuery, Maybe, Announcement } from "./types/graphql";
import {
  ANNOUNCEMENT_TYPE_FRAGMENT,
  ANNOUNCEMENT_FRAGMENT,
} from "./graphql/fragments";
import { AnnouncementDataType } from "@src/api/types/manual";

export async function getAnnouncements() {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${ANNOUNCEMENT_TYPE_FRAGMENT}
      ${ANNOUNCEMENT_FRAGMENT}
      query Announcements {
        announcements {
          nodes {
            content
            date
            id
            databaseId
            title
            announcement_fields {
              ...Announcement_AnnouncementFieldsFragment
            }
            announcementTypes {
              nodes {
                ...AnnouncementTypeFragment
              }
            }
          }
        }
      }
    `,
  });

  const dataOut = data.announcements?.nodes?.map((el) =>
    formatAnnouncement(el)
  );

  return { dataAnnouncement: dataOut };
}

export async function getAnnouncementByDatabaseId(databaseId: number) {
  const { data } = await client.query<RootQuery>({
    query: gql`
      ${ANNOUNCEMENT_TYPE_FRAGMENT}
      ${ANNOUNCEMENT_FRAGMENT}
      query Announcement($id: ID = ${databaseId}, $idType: AnnouncementIdType = DATABASE_ID) {
        announcement(idType: $idType, id: $id) {
          content
          date
          id
          databaseId
          title
          announcement_fields {
            ...Announcement_AnnouncementFieldsFragment
          }
          announcementTypes {
            nodes {
              ...AnnouncementTypeFragment
            }
          }
        }
      }
    `,
  });

  const dataOut = formatAnnouncement(data?.announcement);

  return { data: dataOut };
}

function formatAnnouncement(data: Maybe<Announcement> | undefined) {
  //  Flatten object
  const ann = {
    ...data?.announcement_fields,
    id: data?.id,
    date: data?.date,
    databaseId: data?.databaseId,
    announcementTypes: data?.announcementTypes?.nodes?.map((node) => ({
      ...node,
    })),
    content: data.content,
  };

  // Format some fields
  const dataOut: AnnouncementDataType = {
    ...ann,
    titleEn: ann.titleEn || ann.titleTh,
    created_time_ms: new Date(ann.date).getTime(),
  };

  return dataOut;
}
