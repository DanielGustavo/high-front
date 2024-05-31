import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  padding: ${({ theme }) => `${theme.spacing.xlg} ${theme.spacing.md}`};
  padding-bottom: 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
