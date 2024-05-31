import { apiHandler } from './apiHandler';

import { TLoadPostResponse } from './types/TLoadPost';

export async function loadPost(id: string) {
  const response = await apiHandler.get<TLoadPostResponse>(`/posts/${id}`);

  const post = response.data.post;

  if (post.thumbnailFilename) {
    post.thumbnailFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.thumbnailFilename}`;
  }

  if (post.user?.avatarFilename) {
    post.user.avatarFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.user.avatarFilename}`;
  }

  return post;
}
