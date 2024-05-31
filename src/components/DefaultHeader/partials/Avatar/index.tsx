import React, { useState } from 'react';

import AvatarPhoto from '@/components/Avatar';
import { TAvatar } from '@/components/types/Avatar/TAvatar';
import AuthenticatedMenu from './partials/AuthenticatedMenu';
import UnauthenticatedMenu from './partials/UnauthenticatedMenu';

import { useAuth } from '@/contexts/AuthContext';

import { AvatarButton, Container } from './styles';

const Avatar: React.FC<TAvatar> = ({ userName, src }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { authenticated } = useAuth();

  function toggleMenu() {
    setMenuIsOpen((state) => !state);
  }

  return (
    <Container>
      <AvatarButton type="button" onClick={toggleMenu}>
        <AvatarPhoto userName={userName} src={src} />
      </AvatarButton>

      {authenticated ? (
        <AuthenticatedMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
      ) : (
        <UnauthenticatedMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
      )}
    </Container>
  );
};

export default Avatar;
