'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { theme } from '@/styles/theme';

import { Container } from './styles';

const PostSkeleton: React.FC = () => {
  return (
    <Container>
      <Skeleton
        height={50}
        style={{ marginBottom: theme.spacing.sm }}
        count={3}
      />

      <Skeleton
        height="100vh"
        style={{ marginBottom: theme.spacing.sm }}
        count={1}
      />
    </Container>
  );
};

export default PostSkeleton;
