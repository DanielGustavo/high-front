import React, { LegacyRef, useRef } from 'react';
import FeatherIcon from 'feather-icons-react';

import SimpleButton from '@/components/SimpleButton';
import { SignInModal, SignUpModal } from '@/components/modals';
import MenuBase from '../MenuBase';

import { TModalRef } from '@/components/types/Modal/Root/TModal';
import { TAuthenticatedMenu } from '@/components/types/DefaultHeader/Avatar/AuthenticatedMenu/TAuthenticatedMenu';

const UnauthenticatedMenu: React.FC<TAuthenticatedMenu> = ({
  setIsOpen,
  isOpen,
}) => {
  const signUpModalRef = useRef<TModalRef>();
  const signInModalRef = useRef<TModalRef>();

  function openSignUpModal() {
    signUpModalRef.current?.open();
  }

  function openSignInModal() {
    signInModalRef.current?.open();
  }

  return (
    <>
      <MenuBase
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={() => setIsOpen(false)}
      >
        <SimpleButton onClick={openSignInModal}>
          <FeatherIcon icon="user" size="20px" />
          Sign In
        </SimpleButton>

        <SimpleButton onClick={openSignUpModal}>
          <FeatherIcon icon="user-plus" size="20px" />
          Sign Up
        </SimpleButton>
      </MenuBase>

      <SignUpModal
        openSignInModal={openSignInModal}
        ref={signUpModalRef as LegacyRef<TModalRef>}
      />
      <SignInModal
        openSignUpModal={openSignUpModal}
        ref={signInModalRef as LegacyRef<TModalRef>}
      />
    </>
  );
};

export default UnauthenticatedMenu;
