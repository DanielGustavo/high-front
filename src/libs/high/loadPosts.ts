import { apiHandler } from './apiHandler';

import { TLoadPostsRequest, TLoadPostsResponse } from './types/TLoadPosts';

export async function loadPosts(params?: TLoadPostsRequest) {
  const { page = 1, items = 10, search } = params ?? {};

  const response = await apiHandler.get<TLoadPostsResponse>('/posts', {
    params: { page, search, items },
  });

  response.data.posts.forEach((post) => {
    if (post.thumbnailFilename) {
      post.thumbnailFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.thumbnailFilename}`;
    }

    if (post.user?.avatarFilename) {
      post.user.avatarFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${post.user.avatarFilename}`;
    }
  });

  return response.data;
}
