import styled, { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';

import { TBackgroundBlur } from '@/components/types/Modal/Content/TStyles';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  0% {
    width: 500px;
    height: 500px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all;

  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const BackgroundBlur = styled.div<TBackgroundBlur>`
  position: fixed;
  inset: 0;

  animation: ${({ fadeMilliseconds }) => fadeMilliseconds}ms ${fadeIn} forwards;
  background: ${({ theme }) => transparentize(0.05, theme.colors.light)};

  ${({ open, fadeMilliseconds }) => {
    if (open) return;

    return css`
      pointer-events: none;
      animation: ${fadeMilliseconds}ms ${fadeOut} forwards;
      opacity: 0;
    `;
  }}
`;

export const Container = styled.div`
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);

  width: 678px;
  height: calc(100% - ${({ theme }) => theme.spacing.md});
  padding: ${({ theme }) => theme.spacing.sm};

  box-shadow: ${({ theme }) => {
    const shadowColor = transparentize(0.85, theme.colors.dark);
    return `${shadowColor} 0px 2px 10px`;
  }};
  background: ${({ theme }) => theme.colors.light};

  z-index: ${({ theme }) => theme.zIndex.modal + 1};

  display: flex;
  flex-direction: column;

  animation: 500ms ${scaleIn} forwards;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    transition: 100ms;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(calc(1 - 0.1));
    }
  }
`;
