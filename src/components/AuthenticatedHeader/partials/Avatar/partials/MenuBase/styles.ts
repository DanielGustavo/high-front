import styled, { keyframes } from 'styled-components';

const close = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(0);
  }
`;

export const Container = styled.nav`
  position: absolute;
  right: 0;
  min-width: 200px;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 4px,
    rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background: ${({ theme }) => theme.colors.light};

  margin-top: ${({ theme }) => theme.spacing.xs};

  transition: 200ms;

  &.closed {
    animation: 500ms ${close} forwards ease-in-out;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }

  &.open {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};

    .heightDiv div,
    :nth-child(n) button {
      width: 100%;
    }

    .heightDiv button {
      padding: 4px 0;
      gap: 16px;
    }
  }

  .heightDiv div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
