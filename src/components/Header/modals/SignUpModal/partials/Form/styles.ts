import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  width: 50%;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: ${({ theme }) => theme.spacing.sm};
`;
