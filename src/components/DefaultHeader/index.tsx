'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import SearchInput from '@/components/SearchInput';
import Logo from '@/components/Logo';
import ButtonCTA from '@/components/ButtonCTA';
import Avatar from './partials/Avatar';
import WriteButton from './partials/WriteButton';

import { useAuth } from '@/contexts/AuthContext';

import { Header, NavContainer } from './styles';
import { useHeader } from '@/contexts/HeaderContext';

const DefaultHeader: React.FC = () => {
  const [atWritePage, setAtWritePage] = useState(false);

  const { user, authenticated } = useAuth();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    publishButtonIsDisabled,
    onClickPublishRef,
    publishButtonIsLoading,
    onSearchRef,
  } = useHeader();

  useEffect(() => {
    setAtWritePage(pathname === '/posts/write');
  }, [pathname]);

  function handlePublishClick() {
    if (onClickPublishRef.current) {
      onClickPublishRef.current();
    }
  }

  function search(value?: string) {
    if (onSearchRef.current) {
      onSearchRef.current(value);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    search(e.target.search.value || undefined);
  }

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <Logo simple onClick={() => search(undefined)} />
        <SearchInput
          name="search"
          placeholder="Search"
          defaultValue={searchParams.get('search') || undefined}
        />
      </form>

      <NavContainer>
        {atWritePage ? (
          <ButtonCTA
            size="xSmall"
            variation="success"
            disabled={publishButtonIsDisabled}
            onClick={handlePublishClick}
            isLoading={publishButtonIsLoading}
          >
            Publish
          </ButtonCTA>
        ) : (
          <WriteButton authenticated={authenticated} />
        )}

        <Avatar userName={user?.name} src={user?.avatarFilename || undefined} />
      </NavContainer>
    </Header>
  );
};

export default DefaultHeader;
