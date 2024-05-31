'use client';

import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { theme } from '@/styles/theme';

import { Container } from './styles';

const RandomPostsSkeleton: React.FC = () => {
  return (
    <Container>
      <Skeleton
        height={100}
        style={{ marginBottom: theme.spacing.xs, marginLeft: theme.spacing.md }}
        count={4}
      />
    </Container>
  );
};

export default RandomPostsSkeleton;
