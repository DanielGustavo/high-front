'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';
import Loading from 'react-loading';

import PostCard from '@/components/PostCard';
import { theme } from '@/styles/theme';

import * as high from '@/libs/high';

import { TPostsClient } from '@/app/types/posts/Posts/PostsClient/TPostsClient';

import { Container, LoadingContainer } from './styles';

const PostsClient: React.FC<TPostsClient> = ({
  initialPosts,
  initialPage,
  items,
  totalLength,
  search,
}) => {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage ?? 1);

  const [ref, inView] = useInView();

  async function loadMorePosts() {
    if (posts.length === totalLength) return;

    const nextPage = page + 1;
    const { posts: newPosts } = await high.loadPosts({
      page: nextPage,
      items,
      search,
    });

    setPage(nextPage);
    setPosts((state) => [...state, ...newPosts]);
  }

  useEffect(() => {
    if (!inView) return;
    loadMorePosts();
  }, [inView]);

  return (
    <Container>
      {posts.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}

      {totalLength !== posts.length && (
        <LoadingContainer ref={ref}>
          <Loading
            type="spin"
            color={theme.colors.gray}
            height={30}
            width={30}
          />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default PostsClient;
