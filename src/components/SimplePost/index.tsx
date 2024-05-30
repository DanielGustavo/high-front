import React from 'react';

import Avatar from '@/components/Avatar';

import { Container, Header } from './styles';

const SimplePost: React.FC = () => {
  return (
    <Container>
      <Header>
        <Avatar size={20} />
        <h2>Netflix Technology Blog</h2>
      </Header>

      <p>
        RecSysOps: Best Practices for Operating a Large-Scale Recommender System
      </p>
    </Container>
  );
};

export default SimplePost;
