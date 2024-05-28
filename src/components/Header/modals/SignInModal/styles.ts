import styled from 'styled-components';
import { darken } from 'polished';

import Modal from '@/components/Modal';

export const ContentContainer = styled(Modal.Content)`
  gap: 80px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  p {
    width: 80%;
    text-align: center;
  }
`;

export const Footer = styled.footer`
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.xDefault};
    font-weight: 400;
  }

  button {
    border: none;
    padding: none;
    margin: none;
    background: none;

    font-weight: 600;
    font-size: ${({ theme }) => theme.font.sizes.xDefault};
    color: ${({ theme }) => theme.colors.success};
    transition: 100ms;

    &:hover {
      color: ${({ theme }) => {
        const color = theme.colors.success;
        return darken(0.05, color);
      }};

      transform: scale(1.006);
    }

    &:active {
      transform: scale(calc(1 - 0.006));
    }
  }
`;
