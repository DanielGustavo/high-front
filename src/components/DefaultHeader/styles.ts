import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};

  background: ${({ theme }) => theme.colors.light};
  top: 0;
  position: sticky;

  form,
  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.lg};
`;
