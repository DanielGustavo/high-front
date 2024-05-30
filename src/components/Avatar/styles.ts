import styled from 'styled-components';

import { TContainer } from '@/components/types/Avatar/TStyles';

export const Container = styled.span<TContainer>`
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.lightGray2};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  background: ${({ theme }) => theme.colors.lightGray};

  svg {
    stroke: ${({ theme }) => theme.colors.lightGray2};
  }
`;
