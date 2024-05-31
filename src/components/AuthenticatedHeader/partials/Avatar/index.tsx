import React, { useState } from 'react';

import AvatarPhoto from '@/components/Avatar';
import AuthenticatedMenu from './partials/AuthenticatedMenu';

import { TAvatar } from '@/components/types/Avatar/TAvatar';

import { AvatarButton, Container } from './styles';

const Avatar: React.FC<TAvatar> = ({ userName, src }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen((state) => !state);
  }

  return (
    <Container>
      <AvatarButton type="button" onClick={toggleMenu}>
        <AvatarPhoto userName={userName} src={src} />
      </AvatarButton>

      <AuthenticatedMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </Container>
  );
};

export default Avatar;
