import React from 'react';

import { TContent } from '@/components/types/Modal/Content/TContent';

import { Container } from './styles';

const Content: React.FC<TContent> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Content;
