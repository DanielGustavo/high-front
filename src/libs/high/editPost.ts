import { apiHandler } from './apiHandler';
import { TEditPostRequest, TEditPostResponse } from './types/TEditPost';

export async function editPost({
  title,
  description,
  content,
  id,
}: TEditPostRequest) {
  const response = await apiHandler.put<TEditPostResponse>(`/posts/${id}`, {
    title,
    description,
    content,
  });

  return response.data.post;
}
