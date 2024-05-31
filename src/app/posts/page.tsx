import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import PostsContainer from './Posts';
import RandomPostsSuspense from './RandomPosts';
import PostsSkeleton from './Posts/Skeleton';
import RandomPostsSkeleton from './RandomPosts/Skeleton';

const AuthenticatedHeader = dynamic(
  () => import('@/components/AuthenticatedHeader'),
  { ssr: false }
);

import { Container, ContentContainer } from './styles';

type TParams = {
  searchParams: {
    search?: string;
  };
};

export default async function Posts({ searchParams }: TParams) {
  return (
    <Container>
      <AuthenticatedHeader />

      <ContentContainer>
        <Suspense fallback={<PostsSkeleton />}>
          <PostsContainer search={searchParams.search} />
        </Suspense>

        <Suspense fallback={<RandomPostsSkeleton />}>
          <RandomPostsSuspense />
        </Suspense>
      </ContentContainer>
    </Container>
  );
}
