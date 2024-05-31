import { Dispatch } from 'react';

export type TUnauthenticatedMenu = {
  isOpen: boolean;
  setIsOpen: React.SetStateAction<Dispatch<boolean>>;
};
