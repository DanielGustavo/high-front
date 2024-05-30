import styled, { css } from 'styled-components';

import { TContainer } from '@/components/types/SearchInput/TStyles';

export const Container = styled.label<TContainer>`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xs};

  ${({ fitParent }) => {
    if (!fitParent) return;

    return css`
      width: 100%;
    `;
  }}
`;

export const InputWrapper = styled.div`
  border-radius: 100px;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs} !important;
  align-items: center;
  transition: 100ms;
  cursor: text;

  background: ${({ theme }) => theme.colors.lightBlue};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.dark};
    transform: scale(1.02);
  }

  &:hover {
    transform: scale(1.02);
  }

  svg {
    stroke: ${({ theme }) => theme.colors.lightGray2};
  }

  input {
    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGray2};
      font-weight: 500;
    }

    border: none;
    flex: 1;
    background: none;
    color: ${({ theme }) => theme.colors.dark};

    outline: 0;
    line-height: 22px;
  }
`;
