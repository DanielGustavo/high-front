import React, { forwardRef } from 'react';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import ButtonCTA from '@/components/ButtonCTA';
import { TSignUpModal } from '@/components/types/Header/modals/SignUpModal/TSignUpModal';

import { ContentContainer, Footer, Form, Header, InputsGroup } from './styles';

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

        <Form>
          <InputsGroup>
            <Input label="Email" placeholder="Insert your email" fitParent />

            <Input
              type="password"
              label="Password"
              placeholder="Insert your password"
              fitParent
            />

            <Input
              type="password"
              label="Confirm your password"
              placeholder="Insert your password"
              fitParent
            />
          </InputsGroup>

          <ButtonCTA width="226px" variation="gray">
            Sign up
          </ButtonCTA>
        </Form>

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
