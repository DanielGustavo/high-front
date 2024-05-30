import { Dispatch } from "react";

export type TAuthenticatedMenu = {
  isOpen: boolean;
  setIsOpen: React.SetStateAction<Dispatch<boolean>>;
};
