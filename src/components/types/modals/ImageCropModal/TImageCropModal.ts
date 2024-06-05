export type TImageCropModal = {
  image?: string;
  onCancel: () => void;
  onCrop: (croppedImage: File) => Promise<void>;
  aspectRatio: number;
};
