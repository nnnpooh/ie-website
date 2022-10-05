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
