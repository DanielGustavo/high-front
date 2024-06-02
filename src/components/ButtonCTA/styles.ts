import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

import { TContainer } from '@/components/types/ButtonCTA/TStyles';

import { variations } from './variations';

export const Container = styled.button<TContainer>`
  border: none;
  border-radius: 20px;
  width: fit-content;
  position: relative;
  overflow: hidden;

  padding: ${({ size }) => variations.sizes[size].padding};

  background: ${({ variation }) => variations.colors[variation].background};

  span {
    color: ${({ theme, isLoading }) => {
      return isLoading ? 'transparent' : theme.colors.light;
    }};

    font-weight: 500;
    line-height: ${({ size }) => variations.sizes[size].lineHeight};
    font-size: ${({ size }) => variations.sizes[size].fontSize};
  }

  transition: 100ms;

  &:hover:not([disabled]) {
    background: ${({ variation }) => {
      const bgColor = variations.colors[variation].background;

      return darken(0.05, bgColor);
    }};

    transform: scale(1.006);
  }

  &:active:not([disabled]) {
    transform: scale(calc(1 - 0.006));
  }

  &:disabled {
    background: ${({ variation }) => {
      const bgColor = variations.colors[variation].background;

      return transparentize(0.7, bgColor);
    }};

    cursor: not-allowed;
  }

  ${({ width }) => {
    if (!width) return;

    return css`
      width: ${width};
    `;
  }}
`;
