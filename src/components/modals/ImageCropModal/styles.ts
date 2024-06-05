import styled from 'styled-components';

import Modal from '@/components/Modal';

export const Container = styled(Modal.Content)``;

export const CropperContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 160/107;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.xs};

  button {
    flex: 1;
  }
`;
