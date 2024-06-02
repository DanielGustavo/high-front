import React from 'react';
import parse from 'html-react-parser';
import { format } from 'date-fns';
import dynamic from 'next/dynamic';

import Avatar from '@/components/Avatar';
import Thumbnail from './components/Thumbnail';

const Tooltip = dynamic(() => import('./components/Tooltip'), {
  ssr: false,
});

import * as high from '@/libs/high';

import {
  Container,
  ContentContainer,
  Header,
  ProfileContainer,
  ProfileContent,
} from './styles';

type TPostPage = {
  params: { postId: string };
};

const PostPage: React.FC<TPostPage> = async ({ params }) => {
  const post = await high.loadPost(params.postId);

  function calculateReadTime() {
    const averageWordsPerMinute = 225;
    const words = post.content.trim().split(/\s+/).length;

    const minutes = Math.ceil(words / averageWordsPerMinute);

    return minutes;
  }

  return (
    <Container>
      <Thumbnail title={post.title} src={post.thumbnailFilename} />

      <Header>
        <h1>{post.title}</h1>
        <p>{post.description}</p>

        <ProfileContainer>
          <Avatar
            userName={post.user?.name ?? '???'}
            src={post.user?.avatarFilename || undefined}
            size={44}
          />

          <ProfileContent>
            <p>{post.user?.name ?? '???'}</p>
            <span>
              {calculateReadTime()} min read -{' '}
              {format(post.createdAt, 'MMMM dd, yyyy')}
            </span>
          </ProfileContent>
        </ProfileContainer>
      </Header>

      <Tooltip post={post} />

      <ContentContainer>{parse(post.content)}</ContentContainer>
    </Container>
  );
};

export default PostPage;
