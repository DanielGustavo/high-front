import React from 'react';

import { TButtonCTA } from '@/components/types/ButtonCTA/TButtonCTA';

import { Container } from './styles';

const ButtonCTA: React.FC<TButtonCTA> = ({
  children,
  variation = 'dark',
  size = 'small',
  ...props
}) => {
  return (
    <Container type="button" size={size} variation={variation} {...props}>
      {children}
    </Container>
  );
};

export default ButtonCTA;
