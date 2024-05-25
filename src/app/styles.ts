import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.brand};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  transform: translateY(50%);

  h1 {
    font-family: ${({ theme }) => theme.font.robotoSlab};
    font-size: 120px;
    font-weight: 400;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    width: 80%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};

    div {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.xs};
    }
  }
`;
