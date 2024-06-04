import styled from 'styled-components';

import Modal from '@/components/Modal';

export const Container = styled(Modal.Content)`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};

    width: 100%;

    button {
      width: 50%;
    }
  }
`;
