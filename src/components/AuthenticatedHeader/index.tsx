'use client';

import React from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';

import SearchInput from '@/components/SearchInput';
import Logo from '@/components/Logo';
import SimpleButton from '@/components/SimpleButton';
import Avatar from './partials/Avatar';

import { useAuth } from '@/contexts/AuthContext';

import { Header, NavContainer } from './styles';

const AuthenticatedHeader: React.FC = () => {
  const { user } = useAuth();

  if (!user) return

  return (
    <Header>
      <div>
        <Logo simple />
        <SearchInput placeholder="Search" />
      </div>

      <NavContainer>
        <Link href="/write">
          <SimpleButton>
            <FeatherIcon icon="edit" size="24px" />
            <span>Write</span>
          </SimpleButton>
        </Link>

        <Avatar
          userName={user.name}
          src={user.avatarFilename || undefined}
        />
      </NavContainer>
    </Header>
  );
};

export default AuthenticatedHeader;
