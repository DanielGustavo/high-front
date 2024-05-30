import styled from 'styled-components';

export const Container = styled.span`
  position: relative;
`;

export const AvatarButton = styled.button`
  position: relative;
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.lightGray2};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background: ${({ theme }) => theme.colors.lightGray};

  svg {
    stroke: ${({ theme }) => theme.colors.lightGray2};
  }

  &:hover {
    &::after {
      opacity: 0.05;
    }
  }

  &::after {
    content: '';
    background: ${({ theme }) => theme.colors.dark};
    opacity: 0;
    transition: 200ms;

    position: absolute;
    inset: 0;
  }
`;
