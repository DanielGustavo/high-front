import styled from 'styled-components';

export const Container = styled.span`
  position: relative;
`;

export const AvatarButton = styled.button`
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

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
