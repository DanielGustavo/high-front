import { InputHTMLAttributes } from 'react';

export type TSearchInput = InputHTMLAttributes<HTMLInputElement> & {
  fitParent?: boolean;
};
