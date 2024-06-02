import { TSize, TVariation } from '../TButtonCTA';

export type TLoadingContainer = {
  size: TSize;
  children?: React.ReactNode;
  isLoading?: boolean;
  variation: TVariation;
};

export enum EAnimationState {
  playing,
  played,
  ending,
  stopped,
}
