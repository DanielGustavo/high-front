'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';
import Loading from 'react-loading';

import PostCard from '@/components/PostCard';
import { theme } from '@/styles/theme';

import * as high from '@/libs/high';

import { TPostsClient } from '@/app/types/posts/Posts/PostsClient/TPostsClient';

import { Container, LoadingContainer } from './styles';
import { useHeader } from '@/contexts/HeaderContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PostsClient: React.FC<TPostsClient> = ({
  initialPosts,
  initialPage,
  items,
  totalLength: initialTotalLength,
  search: initialSearch,
}) => {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage ?? 1);
  const [search, setSearch] = useState(initialSearch);
  const [totalLength, setTotalLength] = useState(
    initialTotalLength as number | undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  const [ref, inView] = useInView();
  const { onSearchRef } = useHeader();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  async function loadMorePosts() {
    const nextPage = page + 1;
    const { posts: newPosts, totalLength: totalLengthResponse } =
      await high.loadPosts({
        page: nextPage,
        items,
        search,
      });

    setPage(nextPage);
    setPosts((state) => (page !== 0 ? [...state, ...newPosts] : newPosts));
    setTotalLength(totalLengthResponse);
  }

  useEffect(() => {
    if (
      !inView ||
      (posts.length === totalLength && totalLength !== undefined)
    ) {
      return;
    }

    loadMorePosts();
  }, [inView]);

  useEffect(() => {
    onSearchRef.current = (search?: string) => {
      setPage(1);
      setSearch(search);
      setIsLoading(true);

      const params = new URLSearchParams(searchParams.toString());
      params.set('search', search ?? '');
      router.push(`${pathname}?${params.toString()}`);

      high
        .loadPosts({
          page: 1,
          items,
          search,
        })
        .then(({ posts: newPosts, totalLength: totalLengthResponse }) => {
          setPosts(newPosts);
          setTotalLength(totalLengthResponse);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer ref={ref}>
        <Loading type="spin" color={theme.colors.gray} height={30} width={30} />
      </LoadingContainer>
    );
  }

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
