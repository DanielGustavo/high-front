import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.xlg} auto;

  width: 100%;
  max-width: 680px;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xlg};
`;
