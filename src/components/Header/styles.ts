import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  padding: ${({ theme }) => theme.spacing.sm} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const NavButton = styled.button`
  border: none;
  background: none;

  font-size: ${({ theme }) => theme.font.sizes.default};
`;
