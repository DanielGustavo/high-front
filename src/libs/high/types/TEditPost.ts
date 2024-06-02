import { TPost } from './TPost';

export type TEditPostRequest = {
  title: string;
  description?: string;
  content: string;
  id: string;
};

export type TEditPostResponse = {
  post: TPost;
};
