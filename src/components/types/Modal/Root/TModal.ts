export type TModal = {
  children?: React.ReactNode;
  onClose?: () => void;
};

export type TModalRef = {
  open: () => void;
  close: () => void;
};
