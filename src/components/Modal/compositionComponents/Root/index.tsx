import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import FeatherIcon from 'feather-icons-react';

import { TModalRef, TModal } from '@/components/types/Modal/Root/TModal';

import { theme } from '@/styles/theme';

import { Background, Container, Header } from './styles';

const Modal: React.ForwardRefRenderFunction<TModalRef, TModal> = (
  { children },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keepInDOM, setKeepInDOM] = useState(false);

  const fadeMilliseconds = 300;

  function open() {
    setIsOpen(true);
    setKeepInDOM(true);
  }

  function close() {
    setIsOpen(false);

    setTimeout(() => setKeepInDOM(false), fadeMilliseconds);
  }

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  const Component = (
    <Background fadeMilliseconds={fadeMilliseconds} open={isOpen}>
      <Container>
        <Header>
          <button type="button" onClick={close}>
            <FeatherIcon strokeWidth="1px" icon="x" fill={theme.colors.dark} />
          </button>
        </Header>

        {children}
      </Container>
    </Background>
  );

  if (!keepInDOM) return;

  return createPortal(Component, document.body);
};

export default forwardRef(Modal);
