import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.lightBlue};
  padding: ${({ theme }) => theme.spacing.xs};

  top: 75px;
  position: sticky;
  z-index: ${({ theme }) => theme.zIndex.editorTooltip};
`;

export const Button = styled.button`
  background: none;

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
