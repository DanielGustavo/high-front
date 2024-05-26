import React, { forwardRef } from 'react';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { TModalRef } from '@/components/types/Modal/Root/TModal';
import ButtonCTA from '@/components/ButtonCTA';

import { ContentContainer, Footer, Form, Header, InputsGroup } from './styles';

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

        <Form>
          <InputsGroup>
            <Input label="Email" placeholder="Insert your email" fitParent />

            <Input
              type="password"
              label="Password"
              placeholder="Insert your password"
              fitParent
            />
          </InputsGroup>

          <ButtonCTA width="226px" variation="gray">
            Sign in
          </ButtonCTA>
        </Form>

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
