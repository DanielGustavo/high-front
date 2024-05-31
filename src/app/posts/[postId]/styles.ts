'use client';

import styled from 'styled-components';

export const Container = styled.section`
  margin: ${({ theme }) => theme.spacing.xlg} auto;

  width: 100%;
  max-width: 680px;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xlg};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.xLarge};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.gray};
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.xMedium};
    color: ${({ theme }) => theme.colors.lightGray2};
  }
`;

export const ProfileContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};

  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(${({ theme }) => theme.spacing.xs} / 2);

  p {
    font-size: ${({ theme }) => theme.font.sizes.xDefault};
    color: ${({ theme }) => theme.colors.gray};
  }

  span {
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.lightGray2};
  }
`;

export const ContentContainer = styled.div`
  * {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.robotoSlab};
    font-weight: 370;
    color: ${({ theme }) => theme.colors.gray};
  }

  p + p {
    margin-top: ${({ theme }) => theme.spacing.xlg};
  }

  b {
    font-weight: 700;
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

  p + h1 {
    margin-top: ${({ theme }) => theme.spacing.xlg};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p + h2 {
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;
