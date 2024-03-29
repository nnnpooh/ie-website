import { gql } from "@apollo/client";

export const FACULTY_FRAGMENT = gql`
  fragment Faculty_FacultyFieldsFragment on Faculty_FacultyFields {
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
    displayOrder
    displayWebsite
    linkCv
    linkGoogleScholar
    linkPersonalHomepage
    linkResearchGate
    nameSuffixEn
    linkLinkedin
    adminPositionEnJson
    adminPositionThJson
    profileImage {
      sourceUrl
      sizes
      altText
    }
  }
`;

export const RESEARCH_AREA_FRAGMENT = gql`
  fragment ResearchAreaFragment on ResearchArea {
    name
    slug
    id
    databaseId
  }
`;

export const RESEACH_CENTER_FRAGMENT = gql`
  fragment ResearchCenter_ResearchCenterFieldsFragment on ResearchCenter_ResearchCenterFields {
    desEn
    desTh
    fieldGroupName
    fullNameEn
    fullNameTh
    abbreviationEn
    coverImage {
      sourceUrl
      sizes
      altText
    }
    logoImage {
      sourceUrl
      sizes
      altText
    }
  }
`;

export const STAFF_FRAGMENT = gql`
  fragment Staff_StaffFieldsFragment on Staff_StaffFields {
    displayOrder
    displayWebsite
    emailJson
    fieldGroupName
    firstnameEn
    firstnameTh
    lastnameEn
    lastnameTh
    phoneJson
    positionEnJson
    positionThJson
    titleEn
    titleTh
    profileImage {
      sourceUrl
      sizes
      altText
    }
  }
`;

export const ANNOUNCEMENT_TYPE_FRAGMENT = gql`
  fragment AnnouncementTypeFragment on AnnouncementType {
    id
    name
    slug
    databaseId
  }
`;

export const ANNOUNCEMENT_FRAGMENT = gql`
  fragment Announcement_AnnouncementFieldsFragment on Announcement_AnnouncementFields {
    fieldGroupName
    titleEn
    titleTh
    coverPhoto {
      sourceUrl
      sizes
      altText
    }
  }
`;
