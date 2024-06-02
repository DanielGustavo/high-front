'use client';

import React from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';

import { TPost } from '@/libs/high/types/TPost';

import { useAuth } from '@/contexts/AuthContext';

import { Button, Container } from './styles';

type TTooltip = {
  post: TPost;
};

const Tooltip: React.FC<TTooltip> = ({ post }) => {
  const { user } = useAuth();

  if (post?.user?.id !== user?.id) return;

  return (
    <Container>
      <Link href={`/posts/write?postId=${post.id}`}>
        <Button type="button">
          <FeatherIcon icon="edit-2" size={20} />
        </Button>
      </Link>
    </Container>
  );
};

export default Tooltip;
