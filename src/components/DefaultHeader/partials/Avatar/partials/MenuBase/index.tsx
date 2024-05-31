import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { TMenuBase } from '@/components/types/DefaultHeader/Avatar/MenuBase/TMenuBase';

import { Container } from './styles';

const MenuBase: React.FC<TMenuBase> = ({ isOpen, children, ...props }) => {
  const [menuClass, setMenuClass] = useState(undefined as undefined | string);

  function handleHeightAnimationEnd() {
    setMenuClass(isOpen ? 'open' : 'closed');
  }

  function handleHeightAnimationStart() {
    if (!isOpen) return;

    setMenuClass('open');
  }

  return (
    <Container className={menuClass} {...props}>
      <AnimateHeight
        height={isOpen ? 'auto' : 0}
        duration={300}
        disableDisplayNone
        onHeightAnimationEnd={handleHeightAnimationEnd}
        onHeightAnimationStart={handleHeightAnimationStart}
        className="heightDiv"
      >
        {children}
      </AnimateHeight>
    </Container>
  );
};

export default MenuBase;
