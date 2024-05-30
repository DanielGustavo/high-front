import styled from 'styled-components';

export const Container = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  width: 78%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  padding: ${({ theme }) => `${theme.spacing.xlg} ${theme.spacing.md}`};
  padding-bottom: 0;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 368px;
  min-height: calc(100vh - 70.8px);
  height: 100%;

  padding: ${({ theme }) => `${theme.spacing.xlg} ${theme.spacing.md}`};
  padding-bottom: 0;

  border-left: 1px solid ${({ theme }) => theme.colors.lightBlue};
  gap: ${({ theme }) => theme.spacing.md};

  h1 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.xDefault};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;
