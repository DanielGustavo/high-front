'use client';

import React from 'react';

import SearchInput from '@/components/SearchInput';
import Logo from '@/components/Logo';
import Avatar from './partials/Avatar';
import WriteButton from './partials/WriteButton';

import { useAuth } from '@/contexts/AuthContext';

import { Header, NavContainer } from './styles';

const DefaultHeader: React.FC = () => {
  const { user, authenticated } = useAuth();

  return (
    <Header>
      <div>
        <Logo simple />
        <SearchInput placeholder="Search" />
      </div>

      <NavContainer>
        <WriteButton authenticated={authenticated} />

        <Avatar userName={user?.name} src={user?.avatarFilename || undefined} />
      </NavContainer>
    </Header>
  );
};

export default DefaultHeader;
