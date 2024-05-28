import React, { forwardRef } from 'react';

import Modal from '@/components/Modal';
import { TModalRef } from '@/components/types/Modal/Root/TModal';
import Form from './partials/Form';

import { ContentContainer, Footer, Header } from './styles';

import { TSignInModal } from '@/components/types/Header/modals/SignInModal/TSignInModal';

const SignInModal: React.ForwardRefRenderFunction<TModalRef, TSignInModal> = (
  { openSignUpModal: openGetStartedModal },
  ref
) => {
  function handleSignUpClick() {
    (ref as any).current.close();
    openGetStartedModal();
  }

  return (
    <Modal.Root ref={ref}>
      <ContentContainer>
        <Header>
          <h1>Sign in</h1>
          <p>Enter your email address and your password to sign in.</p>
        </Header>

        <Form />

        <Footer>
          <p>
            No account?{' '}
            <button type="button" onClick={handleSignUpClick}>
              Create one
            </button>
          </p>
        </Footer>
      </ContentContainer>
    </Modal.Root>
  );
};

export default forwardRef(SignInModal);
