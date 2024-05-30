'use client';

import React, { useRef } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ButtonCTA from '@/components/ButtonCTA';
import { SignInModal, SignUpModal } from '@/components/modals';

import { TModalRef } from '@/components/types/Modal/Root/TModal';

import { Container, ContentContainer } from './styles';

export default function Home() {
  const signInModalRef = useRef<TModalRef>();
  const signUpModalRef = useRef<TModalRef>();

  function openSignInModal() {
    signInModalRef.current?.open();
  }

  function openSignUpModal() {
    signUpModalRef.current?.open();
  }

  return (
    <Container>
      <Header />

      <ContentContainer>
        <section>
          <div>
            <h1>Stay curious.</h1>
            <p>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>

          <ButtonCTA
            variation="gray"
            size="medium"
            width="213px"
            onClick={openSignInModal}
          >
            Start reading
          </ButtonCTA>
        </section>
      </ContentContainer>

      <Footer />

      <SignInModal
        ref={signInModalRef as any}
        openSignUpModal={openSignUpModal}
      />
      <SignUpModal
        ref={signUpModalRef as any}
        openSignInModal={openSignInModal}
      />
    </Container>
  );
}
