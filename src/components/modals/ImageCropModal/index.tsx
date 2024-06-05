import React, { forwardRef, useState } from 'react';
import Cropper from 'react-easy-crop';

import Modal from '@/components/Modal';
import ButtonCTA from '@/components/ButtonCTA';

import { TModalRef } from '@/components/types/Modal/Root/TModal';

import convertDataUrlToFile from '@/utils/convertDataUrlToFile';

import { TImageCropModal } from '@/components/types/modals/ImageCropModal/TImageCropModal';
import { TCroppedArea } from '@/components/types/modals/ImageCropModal/TCroppedArea';

import { ButtonsContainer, Container, CropperContainer } from './styles';

const ImageCropModal: React.ForwardRefRenderFunction<
  TModalRef,
  TImageCropModal
> = (props, ref) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [croppedArea, setCroppedArea] = useState(
    undefined as undefined | TCroppedArea
  );

  function close() {
    (ref as any).current.close();
    props.onCancel();
  }

  function handleCropComplete(_: any, area: TCroppedArea) {
    setCroppedArea(area);
  }

  function handleConfirmClick() {
    if (!croppedArea || !props.image) return;

    const canvasElement = document.createElement('canvas');
    canvasElement.width = croppedArea?.width;
    canvasElement.height = croppedArea?.height;

    const context = canvasElement.getContext('2d');

    const imageObj = new Image();
    imageObj.src = props.image;
    imageObj.onload = () => {
      context?.drawImage(
        imageObj,
        croppedArea.x,
        croppedArea.y,
        croppedArea.width,
        croppedArea.height,
        0,
        0,
        croppedArea.width,
        croppedArea.height
      );

      const croppedImageUrl = canvasElement.toDataURL('image/jpeg');

      setIsLoading(true);

      props.onCrop(convertDataUrlToFile(croppedImageUrl)).finally(() => {
        setIsLoading(false);
        close();
      });
    };
  }

  return (
    <Modal.Root ref={ref} onClose={props.onCancel}>
      <Container>
        <CropperContainer>
          <Cropper
            image={props.image}
            aspect={props.aspectRatio}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
            style={{
              containerStyle: {
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
              },
            }}
          />
        </CropperContainer>
      </Container>

      <ButtonsContainer>
        <ButtonCTA variation="gray" onClick={close}>
          cancel
        </ButtonCTA>

        <ButtonCTA
          variation="success"
          onClick={handleConfirmClick}
          isLoading={isLoading}
        >
          Confirm
        </ButtonCTA>
      </ButtonsContainer>
    </Modal.Root>
  );
};

export default forwardRef(ImageCropModal);
