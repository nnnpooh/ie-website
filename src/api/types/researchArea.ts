import { ResearchArea } from './graphql';

export type ResearchAreaType = Pick<
  ResearchArea,
  'name' | 'slug' | 'id' | 'databaseId' | '__typename'
>;
