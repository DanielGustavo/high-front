import { ButtonHTMLAttributes } from 'react';

export type TVariation = 'dark' | 'gray';

export type TSize = 'small' | 'medium';

export type TButtonCTA = ButtonHTMLAttributes<HTMLButtonElement> & {
  variation?: TVariation;
  size?: TSize;
  width?: string;
  isLoading?: boolean;
};
