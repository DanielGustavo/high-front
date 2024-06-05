import { apiHandler } from './apiHandler';

import {
  TUploadAvatarRequest,
  TUploadAvatarResponse,
} from './types/TUploadAvatar';

export async function uploadAvatar({ image }: TUploadAvatarRequest) {
  const formData = new FormData();
  formData.append('avatar', image, image.name);

  const { data } = await apiHandler.put<TUploadAvatarResponse>(
    '/avatar',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  const { user } = data;

  if (user.avatarFilename) {
    user.avatarFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${user.avatarFilename}`;
  }

  return user;
}
