import React, {
  MouseEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
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

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }

    window.addEventListener('keyup', handleEsc);

    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, []);

  const handleBackgroundClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const clickIsOnlyOnBackground = event.currentTarget === event.target;

    if (clickIsOnlyOnBackground) close();
  };

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  const Component = (
    <Background
      onClick={handleBackgroundClick}
      fadeMilliseconds={fadeMilliseconds}
      open={isOpen}
    >
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
