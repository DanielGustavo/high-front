import React, { LegacyRef, useRef } from 'react';
import { useRouter } from 'next/navigation';

import ButtonCTA from '@/components/ButtonCTA';
import Logo from '@/components/Logo';

import { SignInModal, SignUpModal } from '@/components/modals';

import { Container, InnerContainer, NavButton, NavContainer } from './styles';

import { TModalRef } from '@/components/types/Modal/Root/TModal';

const Header: React.FC = () => {
  const signUpModalRef = useRef<TModalRef>();
  const signInModalRef = useRef<TModalRef>();

  const router = useRouter();

  function openSignUpModal() {
    signUpModalRef.current?.open();
  }

  function openSignInModal() {
    signInModalRef.current?.open();
  }

  return (
    <Container>
      <InnerContainer>
        <Logo />

        <NavContainer>
          <NavButton onClick={openSignInModal}>Sign in</NavButton>

          <ButtonCTA onClick={openSignUpModal}>Get started</ButtonCTA>
        </NavContainer>
      </InnerContainer>

      <SignUpModal
        openSignInModal={openSignInModal}
        ref={signUpModalRef as LegacyRef<TModalRef>}
      />
      <SignInModal
        openSignUpModal={openSignUpModal}
        ref={signInModalRef as LegacyRef<TModalRef>}
        onSignIn={() => router.push('/posts')}
      />
    </Container>
  );
};

export default Header;
