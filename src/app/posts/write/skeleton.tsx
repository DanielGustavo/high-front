import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container, ContentContainer, Header } from './styles';

const WriteSkeleton: React.FC = () => {
  return (
    <Container>
      <Header>
        <Skeleton height={50} />
        <Skeleton height={20} />
      </Header>

      <ContentContainer>
        <Skeleton height={50} style={{ marginBottom: '40px' }} />
        <Skeleton height="100vh" />
      </ContentContainer>
    </Container>
  );
};

export default WriteSkeleton;
