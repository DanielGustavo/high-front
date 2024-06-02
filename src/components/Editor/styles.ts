import styled from 'styled-components';
import { transparentize } from 'polished';

import { TButton } from '@/components/types/Editors/TStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing.xlg};

  flex: 1;

  span {
    margin-top: ${({ theme }) => theme.spacing.xlg};
    gap: ${({ theme }) => theme.spacing.xs};

    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const ToolbarContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.lightBlue};
  padding: ${({ theme }) => theme.spacing.xs};

  top: 75px;
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.editorTooltip};
`;

export const EditorContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1;

  .ql-editor {
    height: 100%;
  }

  input {
    display: none;
  }

  .ql-clipboard {
    display: none;
  }

  .ql-editor {
    flex: 1;
    outline: none !important;
  }

  .ql-editor.ql-blank::before {
    color: ${({ theme }) => transparentize(0.5, theme.colors.lightGray2)};
    content: attr(data-placeholder);
    left: 0;
    pointer-events: none;
    position: absolute;

    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.robotoSlab};
    font-weight: 370;
  }

  * {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.robotoSlab};
    font-weight: 370;
    color: ${({ theme }) => theme.colors.gray};
  }

  strong {
    font-weight: 700;

    * {
      font-weight: 700;
    }
  }

  h1,
  h2 {
    font-family: ${({ theme }) => theme.font.robotoFlex};
    font-weight: 700;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xMedium};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  p + p {
    margin-top: ${({ theme }) => theme.spacing.xlg};
  }

  p + h1 {
    margin-top: ${({ theme }) => theme.spacing.xlg};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p + h2 {
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Button = styled.button<TButton>`
  background: ${({ selected, theme }) => {
    return selected ? theme.colors.light : 'none';
  }};

  border: none;
  border-radius: 5px;

  padding: ${({ theme }) => theme.spacing.xs};
  box-sizing: none;
  transition: 200ms;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.sizes.medium};

  &:hover {
    background: ${({ theme }) => transparentize(0.5, theme.colors.light)};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
