import { HTMLAttributes } from "react";

export type TContent = HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};
