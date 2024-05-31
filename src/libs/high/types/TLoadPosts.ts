import { TPost } from './TPost';

export type TLoadPostsRequest = {
  search?: string;
  page?: number;
  items?: number;
};

export type TLoadPostsResponse = {
  posts: TPost[];
  totalLength: number;
};
