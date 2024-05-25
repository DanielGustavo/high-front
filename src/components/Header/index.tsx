import React from 'react';

import ButtonCTA from '@/components/ButtonCTA';
import Logo from '@/components/Logo';

import { Container, InnerContainer, NavButton, NavContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo />

        <NavContainer>
          <NavButton>Write</NavButton>
          <NavButton>Sign in</NavButton>

          <ButtonCTA>Get started</ButtonCTA>
        </NavContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;
