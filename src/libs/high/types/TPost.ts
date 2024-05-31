import { TUser } from './TUser';

export type TPost = {
  id: string;
  title: string;
  description?: string;
  content: string;
  thumbnailFilename?: string;
  user?: TUser;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};
