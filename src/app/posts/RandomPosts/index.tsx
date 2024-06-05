import React from 'react';
import dynamic from 'next/dynamic';

const SimplePost = dynamic(() => import('@/components/SimplePost'), {
  ssr: false,
});

import * as high from '@/libs/high';

import { Aside } from './styles';

const RandomPosts: React.FC = async () => {
  const { posts: randomPosts } = await high.loadPosts({ items: 4 });

  return (
    <Aside>
      <h1>Random Posts</h1>

      <div>
        {randomPosts.map((post) => (
          <SimplePost {...post} key={post.id} />
        ))}
      </div>
    </Aside>
  );
};

export default RandomPosts;
