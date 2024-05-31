import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  max-width: 680px;
  padding: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};

  transition: 200ms;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};

    transform: scale(1.02);
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.xs};

  p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Section = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing.xs};

  h1 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.xMedium};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  p {
    color: ${({ theme }) => theme.colors.lightGray2};
    font-size: ${({ theme }) => theme.font.sizes.xDefault};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const PostThumbnail = styled.div`
  width: 160px;
  height: 107px;
`;

export const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.md};

  p {
    color: ${({ theme }) => theme.colors.lightGray2};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;
