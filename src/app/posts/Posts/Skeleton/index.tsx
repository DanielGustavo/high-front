'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { theme } from '@/styles/theme';

import { Container } from './styles';

const PostsSkeleton: React.FC = () => {
  return (
    <Container>
      <Skeleton
        height={182}
        style={{ marginBottom: theme.spacing.sm }}
        count={20}
      />
    </Container>
  );
};

export default PostsSkeleton;
