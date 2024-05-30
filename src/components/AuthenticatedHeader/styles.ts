import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};

  background: ${({ theme }) => theme.colors.light};

  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.lg};
`;
