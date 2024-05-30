'use client';

import React from 'react';

import AuthenticatedHeader from '@/components/AuthenticatedHeader';
import PostCard from '@/components/PostCard';
import SimplePost from '@/components/SimplePost';

import { Aside, Container, ContentContainer, Main } from './styles';

export default function Posts() {
  return (
    <Container>
      <AuthenticatedHeader />

      <ContentContainer>
        <Main>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Main>

        <Aside>
          <h1>Random Posts</h1>

          <div>
            <SimplePost />
            <SimplePost />
            <SimplePost />
            <SimplePost />
          </div>
        </Aside>
      </ContentContainer>
    </Container>
  );
}
