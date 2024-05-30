import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  border: none;
  background: none;

  font-size: ${({ theme }) => theme.font.sizes.default};

  transition: 50ms;
  * {
    transition: 50ms;
  }

  color: ${({ theme }) => theme.colors.lightGray2};
  span {
    color: ${({ theme }) => theme.colors.lightGray2};
  }

  svg {
    stroke: ${({ theme }) => theme.colors.lightGray2};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    span {
      color: ${({ theme }) => theme.colors.dark};
    }

    svg {
      stroke: ${({ theme }) => theme.colors.dark};
    }
  }
`;
