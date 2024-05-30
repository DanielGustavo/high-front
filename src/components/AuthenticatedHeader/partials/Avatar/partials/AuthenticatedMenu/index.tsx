import React, { Dispatch } from 'react';
import FeatherIcon from 'feather-icons-react';

import SimpleButton from '@/components/SimpleButton';
import MenuBase from '../MenuBase';

import { useAuth } from '@/contexts/AuthContext';

import { TAuthenticatedMenu } from '@/components/types/AuthenticatedHeader/Avatar/AuthenticatedMenu/TAuthenticatedMenu';

import { MenuUserDataSection } from './styles';

const AuthenticatedMenu: React.FC<TAuthenticatedMenu> = ({
  setIsOpen,
  isOpen,
}) => {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    document.location.reload();
  }

  return (
    <MenuBase isOpen={isOpen} setIsOpen={setIsOpen}>
      <MenuUserDataSection>
        <b>{user?.name}</b>
        <p>{user?.email}</p>
      </MenuUserDataSection>

      <SimpleButton onClick={handleLogout}>
        <FeatherIcon icon="log-out" size="20px" />
        Logout
      </SimpleButton>
    </MenuBase>
  );
};

export default AuthenticatedMenu;
