import { apiHandler } from './apiHandler';

import { TDeletePostResponse } from './types/TDeletePost';

export async function deletePost(id: string) {
  const response = await apiHandler.delete<TDeletePostResponse>(`/posts/${id}`);

  const post = response.data.post;

  if (post.thumbnailFilename) {
    post.thumbnailFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.thumbnailFilename}`;
  }

  if (post.user?.avatarFilename) {
    post.user.avatarFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.user.avatarFilename}`;
  }

  return post;
}
