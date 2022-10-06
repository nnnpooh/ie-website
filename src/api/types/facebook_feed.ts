// Generated by https://quicktype.io

export interface FBFeedType {
  message: string;
  message_chars: string;
  permalink_url: string;
  full_picture: string;
  created_time_ms: number;
  created_time: string;
  id: string;
  facebook_page: FacebookPageType;
}

export type FacebookPageType = "undergradTH" | "masterIM" | "grad";

export interface FBFeedAPIType {
  data: FBFeedDatum[];
  paging: Paging;
}

export interface FBFeedDatum {
  id: string;
  created_time: string;
  permalink_url: string;
  full_picture: string;
  attachments: Attachments;
  message?: string;
}

export interface Attachments {
  data: AttachmentsDatum[];
}

export interface AttachmentsDatum {
  media: Media;
  target: Target;
  title?: string;
  type: string;
  url: string;
  description?: string;
  subattachments?: Subattachments;
}

export interface Media {
  image: Image;
}

export interface Image {
  height: number;
  src: string;
  width: number;
}

export interface Subattachments {
  data: SubattachmentsDatum[];
}

export interface SubattachmentsDatum {
  media: Media;
  target: Target;
  type: string;
  url: string;
}

export interface Target {
  id: string;
  url: string;
}

export interface Paging {
  cursors: Cursors;
  next: string;
}

export interface Cursors {
  before: string;
  after: string;
}
