import { TUser } from './TUser';

export type TUploadAvatarRequest = {
  image: File;
};

export type TUploadAvatarResponse = {
  user: TUser;
};
