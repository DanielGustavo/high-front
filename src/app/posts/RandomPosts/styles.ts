'use client';

import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 368px;
  height: 100vh;

  top: 0;
  position: sticky;

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
