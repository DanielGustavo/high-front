'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Editor from '@/components/Editor';

import { useHeader } from '@/contexts/HeaderContext';
import { TFields, useValidation } from './useValidation';

import * as high from '@/libs/high';

import {
  Container,
  ContentContainer,
  DescriptionTitle,
  ErrorMessage,
  Header,
  InputTitle,
} from './styles';

const WritePage: React.FC = () => {
  const [formNode, setFormNode] = useState(
    undefined as HTMLFormElement | undefined
  );
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    setValue,
    trigger,
  } = useValidation();

  const {
    setPublishButtonIsDisabled,
    onClickPublishRef,
    setPublishButtonIsLoading,
  } = useHeader();

  const router = useRouter();

  const formRef = useCallback((node: HTMLFormElement) => {
    setFormNode(node || undefined);
  }, []);

  useEffect(() => {
    setPublishButtonIsDisabled(!isValid);
  }, [isValid]);

  useEffect(() => {
    onClickPublishRef.current = () => {
      formNode?.dispatchEvent(new Event('submit', { bubbles: true }));
    };
  }, [formNode]);

  useEffect(() => {
    setPublishButtonIsLoading(isLoading);
  }, [isLoading]);

  async function onSubmit({ title, description }: TFields) {
    setIsLoading(true);

    try {
      const post = await high.publishPost({
        title,
        description,
        content: htmlContent,
      });

      router.push(`/posts/${post.id}`);

      toast('Post published successfully!', { type: 'success' });
    } finally {
      setIsLoading(false);
    }
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
        />
      </ContentContainer>
    </Container>
  );
};

export default WritePage;
