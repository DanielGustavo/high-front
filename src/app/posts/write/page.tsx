'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';

import Editor from '@/components/Editor';
import WriteSkeleton from './skeleton';

import { useHeader } from '@/contexts/HeaderContext';
import { useAuth } from '@/contexts/AuthContext';
import { TFields, useValidation } from './useValidation';

import * as high from '@/libs/high';
import { TPost } from '@/libs/high/types/TPost';

import {
  ContentContainer,
  DescriptionTitle,
  ErrorMessage,
  Header,
  InputTitle,
  Container,
} from './styles';

const WritePage: React.FC = () => {
  const [formNode, setFormNode] = useState(
    undefined as HTMLFormElement | undefined
  );
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoadingPublishment, setIsLoadingPublishment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(undefined as undefined | TPost);
  const [gotDraftValues, setGotDraftValues] = useState(false);

  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    setValue,
    trigger,
    watch,
  } = useValidation();

  const title = watch('title');
  const description = watch('description');

  const {
    setPublishButtonIsDisabled,
    onClickPublishRef,
    setPublishButtonIsLoading,
  } = useHeader();

  const { user } = useAuth();

  const router = useRouter();

  const formRef = useCallback((node: HTMLFormElement) => {
    setFormNode(node || undefined);
  }, []);

  useEffect(() => {
    setPublishButtonIsDisabled(!isValid);
    setPublishButtonIsLoading(isLoadingPublishment);
  }, [isValid, isLoadingPublishment]);

  useEffect(() => {
    async function loadPost() {
      if (!postId) return;

      setIsLoading(true);

      try {
        const postResponse = await high.loadPost(postId);
        setPost(postResponse);

        setValue('title', postResponse?.title);
        setValue('description', postResponse?.description);
      } finally {
        setIsLoading(false);
      }
    }

    loadPost();
  }, [postId]);

  useEffect(() => {
    if (!post) return;

    if (post?.user?.id !== user?.id) {
      router.push(`/posts/${post.id}`);
    }
  }, [post]);

  useEffect(() => {
    onClickPublishRef.current = () => {
      formNode?.dispatchEvent(new Event('submit', { bubbles: true }));
    };
  }, [formNode]);

  useEffect(() => {
    if (post) return;

    if (!gotDraftValues) {
      setValue('title', localStorage.getItem('draft:title') || '');
      setValue('description', localStorage.getItem('draft:description') || '');

      setGotDraftValues(true);
    } else {
      localStorage.setItem('draft:title', title || '');
      localStorage.setItem('draft:description', description ?? '');
      localStorage.setItem('draft:content', htmlContent || '');
    }
  }, [post, title, description, htmlContent, gotDraftValues]);

  function getEditorDefaultValue() {
    if (post) {
      return post.content || '';
    }

    if (gotDraftValues) return htmlContent || '';

    return localStorage.getItem('draft:content') || undefined;
  }

  async function onSubmit({ title, description }: TFields) {
    setIsLoadingPublishment(true);

    try {
      if (!post) {
        const postResponse = await high.publishPost({
          title,
          description,
          content: htmlContent,
        });

        router.push(`/posts/${postResponse.id}`);

        toast('Post published successfully!', { type: 'success' });
      } else {
        const postResponse = await high.editPost({
          title,
          description,
          content: htmlContent,
          id: post.id,
        });

        router.push(`/posts/${postResponse.id}`);

        toast('Post edited successfully!', { type: 'success' });
      }
    } catch (e) {
      const error = e as any;

      toast(error.response.data.error, { type: 'error' });
    } finally {
      setIsLoadingPublishment(false);
    }
  }

  if (isLoading) {
    return <WriteSkeleton />;
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <Header>
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <InputTitle
          placeholder="Type the title here..."
          {...register('title')}
        />

        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
        <DescriptionTitle
          placeholder="And the description here"
          {...register('description')}
        />
      </Header>

      <ContentContainer>
        <Editor
          onChange={(htmlText, text) => {
            setValue('content', text ?? '');
            trigger('content');

            setHtmlContent(htmlText ?? '');
          }}
          error={errors.content?.message}
          defaultValue={getEditorDefaultValue()}
        />
      </ContentContainer>
    </Container>
  );
};

export default WritePage;
