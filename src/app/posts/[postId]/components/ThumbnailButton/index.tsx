import React, { useRef, useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { TModalRef } from '@/components/types/Modal/Root/TModal';
import ImageCropModal from '@/components/modals/ImageCropModal';

import * as high from '@/libs/high';
import { TPost } from '@/libs/high/types/TPost';

import { Button } from '../Tooltip/styles';

type TThumbnailButton = {
  postId: string;
  onUpload: (post: TPost) => void;
};

const ThumbnailButton: React.FC<TThumbnailButton> = ({ postId, onUpload }) => {
  const [imageSelectedUrl, setImageSelectedUrl] = useState(
    undefined as undefined | string
  );

  const thumbnailPostModalRef = useRef(undefined as undefined | TModalRef);
  const inputRef = useRef(undefined as undefined | HTMLInputElement);

  function openThumbnailPostModal() {
    thumbnailPostModalRef.current?.open();
  }

  function handleInputChange(e: any) {
    const files = e.target?.files as File[];
    if (!files || files.length <= 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setImageSelectedUrl(reader.result ? String(reader.result) : undefined);
      openThumbnailPostModal();
    };
  }

  async function uploadThumb(croppedImage: File) {
    const post = await high.uploadPostThumbnail({
      image: croppedImage,
      postId,
    });

    setImageSelectedUrl(undefined);
    onUpload(post);
  }

  return (
    <>
      <Button type="button" title="add thumbnail" as="label">
        <FeatherIcon icon="image" size={20} />

        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleInputChange}
          ref={inputRef as any}
          hidden
        />
      </Button>

      <ImageCropModal
        image={imageSelectedUrl}
        ref={thumbnailPostModalRef as any}
        onCancel={() => {
          if (inputRef.current) inputRef.current.value = '';
          setImageSelectedUrl(undefined);
        }}
        onCrop={uploadThumb}
        aspectRatio={160 / 107}
      />
    </>
  );
};

export default ThumbnailButton;
