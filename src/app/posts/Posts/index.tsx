import React from 'react';

import PostsClient from './partials/PostsClient';

import * as high from '@/libs/high';

import { TPosts } from '@/app/types/posts/Posts/TPosts';

const Posts: React.FC<TPosts> = async ({ search }) => {
  const items = 20;
  const page = 1;

  const { posts, totalLength } = await high.loadPosts({
    items,
    page,
    search,
  });

  return (
    <PostsClient
      items={items}
      initialPosts={posts}
      initialPage={page}
      totalLength={totalLength}
      search={search}
    />
  );
};

export default Posts;
