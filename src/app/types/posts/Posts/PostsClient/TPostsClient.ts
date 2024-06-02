import { TPost } from '@/libs/high/types/TPost';

export type TPostsClient = {
  initialPage?: number;
  items?: number;
  initialPosts: TPost[];
  totalLength: number;
  search?: string;
};
