import { apiHandler } from './apiHandler';

import {
  TUploadPostThumbnailRequest,
  TUploadPostThumbnailResponse,
} from './types/TUploadPostThumbnail';

export async function uploadPostThumbnail({
  image,
  postId,
}: TUploadPostThumbnailRequest) {
  const formData = new FormData();
  formData.append('thumbnail', image, image.name);

  const { data } = await apiHandler.put<TUploadPostThumbnailResponse>(
    `/posts/${postId}/thumbnail`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  const { post } = data;

  if (post.thumbnailFilename) {
    post.thumbnailFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.thumbnailFilename}`;
  }

  if (post.user?.avatarFilename) {
    post.user.avatarFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.user.avatarFilename}`;
  }

  return post;
}
