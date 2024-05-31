import { Dispatch } from 'react';

export type TAuthenticatedMenu = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};
