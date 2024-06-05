import { TPost } from './TPost';

export type TUploadPostThumbnailRequest = {
  image: File;
  postId: string;
};

export type TUploadPostThumbnailResponse = {
  post: TPost;
};
