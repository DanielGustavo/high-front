'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { useRouter } from 'next/navigation';

import DeletePostModal from '@/components/modals/DeletePostModal';

import { TModalRef } from '@/components/types/Modal/Root/TModal';

import { useAuth } from '@/contexts/AuthContext';

import { TPost } from '@/libs/high/types/TPost';
import * as high from '@/libs/high';

import { Button, Container } from './styles';

type TTooltip = {
  post: TPost;
};

const Tooltip: React.FC<TTooltip> = ({ post }) => {
  const { user } = useAuth();
  const router = useRouter();

  const deletePostModalRef = useRef(undefined as undefined | TModalRef);

  function openDeletePostModal() {
    deletePostModalRef.current?.open();
  }

  if (post?.user?.id !== user?.id) return;

  return (
    <Container>
      <Link href={`/posts/write?postId=${post.id}`}>
        <Button type="button">
          <FeatherIcon icon="edit-2" size={20} />
        </Button>
      </Link>

      <Button type="button" onClick={openDeletePostModal}>
        <FeatherIcon icon="trash-2" size={20} />
      </Button>

      <DeletePostModal
        ref={deletePostModalRef as any}
        onConfirm={async () => {
          await high.deletePost(post.id);

          router.push('/posts');
        }}
      />
    </Container>
  );
};

export default Tooltip;
