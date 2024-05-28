import React, { forwardRef } from 'react';

import Modal from '@/components/Modal';
import Form from './partials/Form';

import { ContentContainer, Footer, Header } from './styles';

import { TSignUpModal } from '@/components/types/Header/modals/SignUpModal/TSignUpModal';
import { TModalRef } from '@/components/types/Modal/Root/TModal';

const SignUpModal: React.ForwardRefRenderFunction<TModalRef, TSignUpModal> = (
  { openSignInModal },
  ref
) => {
  function handleSignInClick() {
    (ref as any).current.close();
    openSignInModal();
  }

  return (
    <Modal.Root ref={ref}>
      <ContentContainer>
        <Header>
          <h1>Join High.</h1>
          <p>
            Enter your email address and your password to create an account.
          </p>
        </Header>

        <Form
          openSignInModal={() => {
            (ref as any).current.close();
            openSignInModal();
          }}
        />

        <Footer>
          <p>
            Already have an account?{' '}
            <button type="button" onClick={handleSignInClick}>
              Sign in
            </button>
          </p>
        </Footer>
      </ContentContainer>
    </Modal.Root>
  );
};

export default forwardRef(SignUpModal);
