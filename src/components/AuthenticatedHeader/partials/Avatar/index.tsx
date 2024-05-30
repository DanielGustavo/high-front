import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import AuthenticatedMenu from './partials/AuthenticatedMenu';

import { AvatarButton, Container } from './styles';

const Avatar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen((state) => !state);
  }

  return (
    <Container>
      <AvatarButton type="button" onClick={toggleMenu}>
        <FeatherIcon icon="user" size={25} />
      </AvatarButton>

      <AuthenticatedMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </Container>
  );
};

export default Avatar;
