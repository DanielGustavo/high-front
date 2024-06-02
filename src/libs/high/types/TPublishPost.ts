import { TPost } from './TPost';

export type TPublishPostRequest = {
  title: string;
  description?: string;
  content: string;
};

export type TPublishPostResponse = {
  post: TPost;
};
