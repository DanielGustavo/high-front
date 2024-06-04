import React, { forwardRef, useState } from 'react';
import { toast } from 'react-toastify';

import Modal from '@/components/Modal';
import ButtonCTA from '@/components/ButtonCTA';

import { TModalRef } from '@/components/types/Modal/Root/TModal';
import { TDeletePostModal } from '@/components/types/modals/DeletePostModal/TDeletePostModal';

import { Container } from './styles';

const DeletePostModal: React.ForwardRefRenderFunction<
  TModalRef,
  TDeletePostModal
> = ({ onConfirm }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  function close() {
    (ref as any).current.close();
  }

  async function handleConfirmationClick() {
    try {
      setIsLoading(true);
      await onConfirm();

      close();
    } catch (e: any) {
      toast(e.response.data.error, { type: 'error' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal.Root ref={ref}>
      <Container>
        <header>
          <h1>Are you sure you want to delete this post?</h1>
        </header>

        <div>
          <ButtonCTA
            variation="success"
            isLoading={isLoading}
            onClick={handleConfirmationClick}
          >
            Yes
          </ButtonCTA>

          <ButtonCTA variation="gray" onClick={close}>
            cancel
          </ButtonCTA>
        </div>
      </Container>
    </Modal.Root>
  );
};

export default forwardRef(DeletePostModal);
