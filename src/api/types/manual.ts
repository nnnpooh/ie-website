import {
  Maybe,
  Faculty_FacultyFields,
  ResearchCenter_ResearchCenterFields,
  ResearchArea,
  Staff_StaffFields,
} from "./graphql";

export interface EducationItem {
  degree_th: string;
  degree_en: string;
  year_graduated_th: number;
  year_graduated_en: number;
  institution_th: string;
  institution_en: string;
  field_th: string;
  field_en: string;
}

export type AcademicRank =
  | "lecturer"
  | "assistant_professor"
  | "associate_professor"
  | "professor"
  | "professor_emeritus";

export interface AcademicRankItem {
  key: AcademicRank;
  textFullTh: string;
  textAbbreTh: string;
  textFullEn: string;
  textAbbreEn: string;
}

export const academicRankMap: AcademicRankItem[] = [
  {
    key: "lecturer",
    textFullTh: "อาจารย์",
    textAbbreTh: "อ.",
    textFullEn: "",
    textAbbreEn: "",
  },
  {
    key: "assistant_professor",
    textFullTh: "ผู้ช่วยศาสตราจารย์",
    textAbbreTh: "ผศ.",
    textFullEn: "Assistant Professor",
    textAbbreEn: "Asst. Prof.",
  },
  {
    key: "associate_professor",
    textFullTh: "รองศาสตราจารย์",
    textAbbreTh: "รศ.",
    textFullEn: "Associate Professor",
    textAbbreEn: "Assoc. Prof.",
  },
  {
    key: "professor",
    textFullTh: "ศาสตราจารย์",
    textAbbreTh: "ศ.",
    textFullEn: "Professor",
    textAbbreEn: "Prof.",
  },
  {
    key: "professor_emeritus",
    textFullTh: "ศาสตราจารย์เกียรติคุณ",
    textAbbreTh: "ศ.(เกียรติคุณ)",
    textFullEn: "Emeritus Professor",
    textAbbreEn: "Prof. Emer.",
  },
];

export interface ResearchCenterType
  extends ResearchCenter_ResearchCenterFields {
  id: string | undefined;
  databaseId: number | undefined;
  title: Maybe<string> | undefined;
  content: Maybe<string> | undefined;
  faculties?: FacultyType[]; // Not sure if the circular depenency between ReserachCenter and Faculty will be a problem or not.
}

export type ResearchAreaType = Pick<
  ResearchArea,
  "name" | "slug" | "id" | "databaseId" | "__typename"
>;

export interface FacultyType extends Faculty_FacultyFields {
  id: Maybe<string>;
  databaseId: Maybe<number>;
  email: string[];
  phone: string[];
  adminPositionTh: string[];
  adminPositionEn: string[];
  education: EducationItem[];
  fullNameTh: string;
  fullNameEn: string;
  researchCenters: ResearchCenterType[];
  researchAreas: ResearchArea[] | null;
}

export interface StaffType extends Staff_StaffFields {
  id: Maybe<string>;
  databaseId: Maybe<number>;
  email: string[];
  phone: string[];
  positionTh: string[];
  positionEn: string[];
}
