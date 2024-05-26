import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;

  gap: ${({ theme }) => theme.spacing.lg};

  h1 {
    font-family: ${({ theme }) => theme.font.robotoSlab};
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: 400;
  }
`;
