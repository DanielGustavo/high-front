'use client';

import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

import Avatar from '@/components/Avatar';

import { TPost } from '@/libs/high/types/TPost';

import {
  AuthorContainer,
  Container,
  Footer,
  PostData,
  PostThumbnail,
  Section,
} from './styles';

const PostCard: React.FC<TPost> = (post) => {
  return (
    <Container href={`/posts/${post.id}`}>
      <AuthorContainer>
        <Avatar
          userName={post.user?.name ?? '???'}
          size={20}
          src={post.user?.avatarFilename || undefined}
        />

        <p>{post.user?.name ?? '???'}</p>
      </AuthorContainer>

      <Section>
        <PostData>
          <h1>{post.title}</h1>

          <p>{post.description}</p>

          <Footer>
            <p>{format(post.createdAt, 'MMMM dd, yyyy')}</p>
          </Footer>
        </PostData>

        {post.thumbnailFilename && (
          <PostThumbnail>
            <Image
              src={post.thumbnailFilename}
              width={160}
              height={107}
              objectFit="contain"
              alt={`"${post.title}" thubmnail`}
            />
          </PostThumbnail>
        )}
      </Section>
    </Container>
  );
};

export default PostCard;
