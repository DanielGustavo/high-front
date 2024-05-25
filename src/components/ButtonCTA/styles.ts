import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { TContainer } from '@/components/types/ButtonCTA/TStyles';

import { variations } from './variations';

export const Container = styled.button<TContainer>`
  border: none;
  border-radius: 20px;
  width: fit-content;

  padding: ${({ size }) => variations.sizes[size].padding};

  background: ${({ variation }) => variations.colors[variation].background};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 500;
  line-height: ${({ size }) => variations.sizes[size].lineHeight};
  font-size: ${({ size }) => variations.sizes[size].fontSize};

  transition: 100ms;

  &:hover {
    background: ${({ variation }) => {
      const bgColor = variations.colors[variation].background;

      return darken(0.05, bgColor);
    }};

    transform: scale(1.006);
  }

  &:active {
    transform: scale(calc(1 - 0.006));
  }

  ${({ width }) => {
    if (!width) return;

    return css`
      width: ${width};
    `;
  }}
`;
