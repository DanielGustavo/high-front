import React, { useRef, useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import SimpleButton from '@/components/SimpleButton';
import { TModalRef } from '@/components/types/Modal/Root/TModal';
import ImageCropModal from '@/components/modals/ImageCropModal';

import { useAuth } from '@/contexts/AuthContext';

import * as high from '@/libs/high';

const UploadAvatarButton: React.FC = () => {
  const [imageSelectedUrl, setImageSelectedUrl] = useState(
    undefined as undefined | string
  );

  const { setUser, persistAuthData, token } = useAuth();

  const imageCropModalRef = useRef(undefined as undefined | TModalRef);
  const inputRef = useRef(undefined as undefined | HTMLInputElement);

  function openImageCropModal() {
    imageCropModalRef.current?.open();
  }

  function handleInputChange(e: any) {
    const files = e.target?.files as File[];
    if (!files || files.length <= 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setImageSelectedUrl(reader.result ? String(reader.result) : undefined);
      openImageCropModal();
    };
  }

  function fireFileInput() {
    inputRef.current?.click();
  }

  async function uploadAvatar(croppedImage: File) {
    const user = await high.uploadAvatar({
      image: croppedImage,
    });

    setImageSelectedUrl(undefined);
    setUser(user);

    if (token) persistAuthData(user, token);
  }

  return (
    <>
      <SimpleButton onClick={fireFileInput}>
        <FeatherIcon icon="camera" size="20px" />
        Upload avatar
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleInputChange}
          ref={inputRef as any}
          hidden
        />
      </SimpleButton>
      <ImageCropModal
        image={imageSelectedUrl}
        ref={imageCropModalRef as any}
        onCancel={() => {
          if (inputRef.current) inputRef.current.value = '';
          setImageSelectedUrl(undefined);
        }}
        onCrop={uploadAvatar}
        aspectRatio={1 / 1}
      />
    </>
  );
};

export default UploadAvatarButton;
