import { ButtonHTMLAttributes } from 'react';

export type TVariation = 'dark' | 'gray' | 'success';

export type TSize = 'xSmall' | 'small' | 'medium';

export type TButtonCTA = ButtonHTMLAttributes<HTMLButtonElement> & {
  variation?: TVariation;
  size?: TSize;
  width?: string;
  isLoading?: boolean;
};
