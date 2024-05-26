import { InputHTMLAttributes } from 'react';

export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  fitParent?: boolean;
};
