'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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
  const { publishButtonIsDisabled, onClickPublishRef, publishButtonIsLoading } =
    useHeader();

  useEffect(() => {
    setAtWritePage(pathname === '/posts/write');
  }, [pathname]);

  function handlePublishClick() {
    if (onClickPublishRef.current) {
      onClickPublishRef.current();
    }
  }

  return (
    <Header>
      <div>
        <Logo simple />
        <SearchInput placeholder="Search" />
      </div>

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
