import { Dispatch } from "react";

export type TMenuBase = {
  isOpen: boolean;
  setIsOpen: React.SetStateAction<Dispatch<boolean>>;
  children?: React.ReactNode;
};
