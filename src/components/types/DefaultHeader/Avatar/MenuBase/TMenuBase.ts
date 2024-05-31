import { Dispatch, HTMLAttributes } from 'react';

export type TMenuBase = HTMLAttributes<HTMLElement> & {
  isOpen: boolean;
  setIsOpen: React.SetStateAction<Dispatch<boolean>>;
  children?: React.ReactNode;
};
