import React from 'react';

import LoadingContainer from './partials/LoadingContainer';

import { TButtonCTA } from '@/components/types/ButtonCTA/TButtonCTA';

import { Container } from './styles';

const ButtonCTA: React.FC<TButtonCTA> = ({
  children,
  variation = 'dark',
  size = 'small',
  isLoading,
  ...props
}) => {
  return (
    <Container
      type="button"
      size={size}
      variation={variation}
      disabled={isLoading}
      isLoading={isLoading}
      {...props}
    >
      <LoadingContainer variation={variation} size={size} isLoading={isLoading}>
        {children}
      </LoadingContainer>

      <span>{children}</span>
    </Container>
  );
};

export default ButtonCTA;
