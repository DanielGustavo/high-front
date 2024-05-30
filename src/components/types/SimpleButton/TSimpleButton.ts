import React, { HTMLAttributes } from 'react';

export type TSimpleButton = HTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};
