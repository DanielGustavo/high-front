import React from 'react';

import { Container } from './styles';

import { TSimpleButton } from '@/components/types/SimpleButton/TSimpleButton';

const SimpleButton: React.FC<TSimpleButton> = ({ children, ...props }) => {
  return (
    <Container type="button" {...props}>
      {children}
    </Container>
  );
};

export default SimpleButton;
