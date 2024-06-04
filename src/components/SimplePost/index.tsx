'use client';

import React from 'react';

import Avatar from '@/components/Avatar';

import { useAuth } from '@/contexts/AuthContext';

import { TPost } from '@/libs/high/types/TPost';

import { Container, Header } from './styles';

const SimplePost: React.FC<TPost> = (post) => {
  const { user } = useAuth();

  return (
    <Container href={`/posts/${post.id}`}>
      <Header isMine={!!user?.id && user?.id === post.user?.id}>
        <Avatar
          src={post.user?.avatarFilename || undefined}
          userName={post.user?.name ?? '???'}
          size={20}
        />
        <h2>{post.user?.name ?? '???'}</h2>
      </Header>

      <p>{post.title}</p>
    </Container>
  );
};

export default SimplePost;
