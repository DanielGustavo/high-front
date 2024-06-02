'use client';

import styled from 'styled-components';
import { transparentize } from 'polished';
import TextareaAutosize from 'react-autosize-textarea';

export const Container = styled.form`
  margin: ${({ theme }) => theme.spacing.xlg} auto 0 auto;

  width: 100%;
  max-width: 680px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xlg};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const InputTitle = styled(TextareaAutosize)`
  background: none;
  border: none;
  resize: none;
  overflow: hidden;

  font-size: ${({ theme }) => theme.font.sizes.xLarge};
  font-weight: 800;
  font-family: ${({ theme }) => theme.font.robotoFlex};
  color: ${({ theme }) => theme.colors.dark};

  &::placeholder {
    color: ${({ theme }) => transparentize(0.5, theme.colors.lightGray2)};
  }
`;

export const DescriptionTitle = styled(TextareaAutosize)`
  background: none;
  border: none;
  resize: none;

  font-size: ${({ theme }) => theme.font.sizes.xMedium};
  color: ${({ theme }) => theme.colors.lightGray2};
  font-family: ${({ theme }) => theme.font.robotoFlex};

  &::placeholder {
    color: ${({ theme }) => transparentize(0.5, theme.colors.lightGray2)};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;
