import { apiHandler } from './apiHandler';
import {
  TPublishPostRequest,
  TPublishPostResponse,
} from './types/TPublishPost';

export async function publishPost({
  title,
  description,
  content,
}: TPublishPostRequest) {
  const response = await apiHandler.post<TPublishPostResponse>('/posts', {
    title,
    description,
    content,
  });

  return response.data.post;
}
