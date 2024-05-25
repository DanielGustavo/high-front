import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  bottom: 0;
  position: fixed;
  width: 100%;

  padding: ${({ theme }) => theme.spacing.md} 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.light};

  p {
    color: ${({ theme }) => theme.colors.lightGray2};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;
