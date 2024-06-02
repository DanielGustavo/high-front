import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { theme } from '@/styles/theme';

import {
  EAnimationState,
  TLoadingContainer,
} from '@/components/types/ButtonCTA/LoadingContainer/TLoadingContainer';

import { Container } from './styles';

const LoadingContainer: React.FC<TLoadingContainer> = ({
  size,
  children,
  isLoading,
  variation,
}) => {
  const [animationState, setAnimationState] = useState(EAnimationState.stopped);

  useEffect(() => {
    if (isLoading && animationState === EAnimationState.stopped) {
      setAnimationState(EAnimationState.playing);
    }

    if (!isLoading && animationState === EAnimationState.playing) {
      setAnimationState(EAnimationState.ending);
    }

    if (animationState === EAnimationState.ending) {
      setTimeout(() => {
        setAnimationState(EAnimationState.stopped);
      }, 500);
    }
  }, [isLoading, animationState]);

  return (
    <Container
      size={size}
      variation={variation}
      animationState={animationState}
    >
      <span>
        <ReactLoading
          type="spin"
          height={'20px'}
          width={'20px'}
          color={theme.colors.light}
          className="loadingSpin"
        />
      </span>

      <span>{children}</span>
    </Container>
  );
};

export default LoadingContainer;
