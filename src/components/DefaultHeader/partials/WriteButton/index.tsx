import React, { HTMLAttributes, useRef } from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { useRouter } from 'next/navigation';

import SimpleButton from '@/components/SimpleButton';
import { TModalRef } from '@/components/types/Modal/Root/TModal';
import { SignInModal, SignUpModal } from '@/components/modals';

import { TWriteButton } from '@/components/types/DefaultHeader/WriteButton/TWriteButton';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => (
  <SimpleButton {...props}>
    <FeatherIcon icon="edit" size="24px" />
    <span>Write</span>
  </SimpleButton>
);

const WriteButton: React.FC<TWriteButton> = ({ authenticated }) => {
  const signInModalRef = useRef<TModalRef>();
  const signUpModalRef = useRef<TModalRef>();

  const router = useRouter();

  function openSignInModal() {
    signInModalRef.current?.open();
  }

  function openSignUpModal() {
    signUpModalRef.current?.open();
  }

  function handleSignIn() {
    router.push('/write');
  }

  if (!authenticated)
    return (
      <>
        <Button onClick={openSignInModal} />

        <SignInModal
          ref={signInModalRef as any}
          openSignUpModal={openSignUpModal}
          onSignIn={handleSignIn}
        />
        <SignUpModal
          ref={signUpModalRef as any}
          openSignInModal={openSignInModal}
        />
      </>
    );

  return (
    <Link href="/write">
      <Button />
    </Link>
  );
};

export default WriteButton;
