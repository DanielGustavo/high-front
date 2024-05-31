import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xs};

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.xDefault};
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  transition: 200ms;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};

    transform: scale(1.02);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  h2 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: 600;
  }
`;
