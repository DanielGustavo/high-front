import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';

import { variations } from '../../variations';

import { EAnimationState } from '@/components/types/ButtonCTA/LoadingContainer/TLoadingContainer';
import { TLoadingContainer } from '@/components/types/ButtonCTA/LoadingContainer/TStyles';

const slideDown = keyframes`
  100% {
    top: 0;
  }
`;

const slideUp = keyframes`
  0% {
    top: 0;
  }

  90% {
    top: -100%;
  }

  100% {
    display: none;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.span<TLoadingContainer>`
  position: absolute;
  overflow: hidden;
  inset: 0;

  flex-direction: column;
  align-items: center;
  height: 200%;

  top: -100%;

  span {
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;

    background: ${({ variation, animationState }) => {
      const bgColor = variations.colors[variation].background;

      if (animationState === EAnimationState.ending) {
        return bgColor;
      }

      return lighten(0.3, bgColor);
    }};

    color: ${({ theme }) => theme.colors.light} !important;
  }

  .loadingSpin {
    animation: 700ms ${spin} infinite ease-in-out;
  }

  background: ${({ variation, animationState }) => {
    const bgColor = variations.colors[variation].background;

    if (animationState === EAnimationState.ending) {
      return bgColor;
    }

    return lighten(0.3, bgColor);
  }};

  display: none;

  ${({ animationState }) => {
    if (animationState === EAnimationState.playing) {
      return css`
        display: flex;
        animation: 500ms ${slideDown} forwards;
      `;
    }

    if (animationState === EAnimationState.ending) {
      return css`
        display: flex;

        animation: 500ms ${slideUp} forwards;
      `;
    }
  }}
`;
